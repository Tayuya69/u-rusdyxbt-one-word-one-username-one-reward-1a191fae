# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Tayuya69/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Tayuya69/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for the [One Word, One Username, One Reward](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes the entrant's own make.fun username — one word, nothing else — to `/output/entry.txt`. The entry is the handle `tayuya0606` (10 characters, one word, no trailing newline, no extra text). A judge model reads two usernames at a time and picks the one that feels funnier or more interesting.

## Run

```sh
node main.ts
```

Outside the grader, set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` is written (it stands in for `/output`):

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

The program is fully deterministic: the text is a fixed string in code, with no network, no clock, and no randomness, so every run writes the exact same bytes.

## License

MIT — see [LICENSE](LICENSE).
