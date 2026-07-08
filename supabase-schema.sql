create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null default '',
  name text not null default '',
  avatar_id text,
  updated_at timestamptz not null default now()
);

create table if not exists public.game_groups (
  id uuid primary key default gen_random_uuid(),
  host_user_id uuid not null references auth.users(id) on delete cascade,
  invite_code text not null unique,
  game_key text not null default 'blobfahrer',
  status text not null default 'lobby' check (status in ('lobby', 'playing', 'finished')),
  game_state jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.game_members (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.game_groups(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  avatar_id text,
  is_host boolean not null default false,
  joined_at timestamptz not null default now(),
  unique (group_id, user_id)
);

alter table public.user_profiles enable row level security;
alter table public.game_groups enable row level security;
alter table public.game_members enable row level security;

drop policy if exists "profiles own read" on public.user_profiles;
drop policy if exists "profiles own upsert" on public.user_profiles;
drop policy if exists "groups authenticated read" on public.game_groups;
drop policy if exists "groups authenticated insert" on public.game_groups;
drop policy if exists "groups host update" on public.game_groups;
drop policy if exists "members group read" on public.game_members;
drop policy if exists "members self insert" on public.game_members;
drop policy if exists "members self or host delete" on public.game_members;

create policy "profiles own read" on public.user_profiles
  for select using (auth.uid() = user_id);

create policy "profiles own upsert" on public.user_profiles
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "groups authenticated read" on public.game_groups
  for select using (auth.role() = 'authenticated');

create policy "groups authenticated insert" on public.game_groups
  for insert with check (auth.uid() = host_user_id);

create policy "groups host update" on public.game_groups
  for update using (
    host_user_id = auth.uid()
    or exists (
      select 1 from public.game_members
      where game_members.group_id = game_groups.id
      and game_members.user_id = auth.uid()
    )
  );

create policy "members group read" on public.game_members
  for select using (auth.role() = 'authenticated');

create policy "members self insert" on public.game_members
  for insert with check (auth.uid() = user_id);

create policy "members self or host delete" on public.game_members
  for delete using (
    auth.uid() = user_id
    or exists (
      select 1 from public.game_groups
      where game_groups.id = game_members.group_id
      and game_groups.host_user_id = auth.uid()
    )
  );

alter publication supabase_realtime add table public.game_groups;
alter publication supabase_realtime add table public.game_members;
