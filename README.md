# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

# 概要

です、ます、でした等の丁寧な言葉遣いを禁止しているチャットツール

# 制作背景

文章での円滑なコミュニケーションの実現
堅苦しい雰囲気の緩和

メールの定型分をそもそも入力させなければ文章でのコミュニケーションが円滑になるのではないか
気軽に聞きたいことも文章だと堅苦しくなってしまって聞きにくい
PC を普段から使わない人がメール報告するとタイプに時間がかかる
ちょっとしたミスでも重大なことをしてしまったような謝罪文になりがち

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## groups テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association

- has_many :groups_users
- has_many :users , through: :groups_users
- has_many :messages

## groups_users テーブル

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

### Association

- belongs_to :group
- belongs_to :user

## messages テーブル

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| body     | text    |                                |
| image    | string  |                                |
| group_id | integer | null: false, foreign_key: true |
| user_id  | integer | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group
