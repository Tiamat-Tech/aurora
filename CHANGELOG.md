# Changelog

## [4.0.3](https://github.com/Tiamat-Tech/aurora/compare/v4.0.2...v4.0.3) (2026-08-05)


### Bug Fixes

* **calendar:** keep keyboard navigation alive after picking a date ([fd3823f](https://github.com/Tiamat-Tech/aurora/commit/fd3823f364b4faf98c39fc6c31ea754f1a43ac5d))
* **calendar:** keep keyboard navigation alive after picking a date ([dcd8b15](https://github.com/Tiamat-Tech/aurora/commit/dcd8b15d5a83ce45c6127129f839d073bd76964b))
* **signin:** remove the autofocus from the email field ([529dc72](https://github.com/Tiamat-Tech/aurora/commit/529dc724f67206ae71730fdc5ed1321cf83f7a20))


### Documentation

* add the readme and restore the license ([be577bb](https://github.com/Tiamat-Tech/aurora/commit/be577bb801458ae304d107b8f3d2cc0f39d60cd9))
* show the dashboard in the readme ([9190ed8](https://github.com/Tiamat-Tech/aurora/commit/9190ed84c86a429e5ef3687440827af201ad0666))
* show the dashboard in the readme ([27c410e](https://github.com/Tiamat-Tech/aurora/commit/27c410e52a3246277bcfeeb8a4bfb8865c691985))

## [4.0.2](https://github.com/askides/aurora/compare/v4.0.1...v4.0.2) (2026-08-05)


### Documentation

* show the dashboard in the readme ([27c410e](https://github.com/askides/aurora/commit/27c410e52a3246277bcfeeb8a4bfb8865c691985))

## [4.0.1](https://github.com/askides/aurora/compare/v4.0.0...v4.0.1) (2026-08-05)


### Bug Fixes

* **calendar:** keep keyboard navigation alive after picking a date ([dcd8b15](https://github.com/askides/aurora/commit/dcd8b15d5a83ce45c6127129f839d073bd76964b))

## [4.0.0](https://github.com/askides/aurora/compare/v2.0.1...v4.0.0) (2026-08-05)

Aurora 4.0 is a complete rewrite. Nothing carries over from the 2.x Next.js app
— the stack, the database, the tracker and the dashboard are all new, so there's
no upgrade path from a 2.x install. There is no 3.x; the number was skipped so
the rewrite could start on a clean major.

The app now runs on React Router v8 in a pnpm workspace, with Drizzle in place of
Prisma and a single wide events table instead of the old normalised schema. The
tracker was rewritten in TypeScript and no longer touches cookies or
`localStorage` — visitor and session ids come from a rotating HMAC,
sessionization happens at ingest, and referrers are sorted into acquisition
channels as they're written. The dashboard is new too: range and timezone
pickers, a Recharts timeseries, tabbed breakdown panels and a per-site list, all
on an aurora palette.

To move over, start from a fresh database and re-copy the tracker snippet from
your dashboard — a 2.x `tracker.js` won't report to the 4.x collector.
