# README

## 概要

です、ます、でした等の丁寧な言葉遣いを禁止しているチャットツール

## 本番環境

https://non-honorific-chat.herokuapp.com/

## 制作背景

文章での円滑なコミュニケーションの実現
堅苦しい雰囲気の緩和

メールの定型分をそもそも入力させなければ文章でのコミュニケーションが円滑になるのではないか
気軽に聞きたいことも文章だと堅苦しくなってしまって聞きにくい
PC を普段から使わない人がメール報告するとタイプに時間がかかる
ちょっとしたミスでも重大なことをしてしまったような謝罪文になりがち

## DEMO

https://gyazo.com/866fec25e2354898222779b039a4a2b1
https://gyazo.com/238f89764fd8f26f2d46f8d164b954b9

## 工夫したポイント

カスタムバリデーションを自作し、です、ます、でしたという言葉が入っているとエラーが出るようになっている
メッセージ一覧画面を LINE 風にデザインしている

## 使用技術(開発環境)

Ruby/Ruby on Rails/MySQL/JavaScript/Github/heroku/Visual Studio Code

## 課題や今後実装したい機能

簡単なメッセージを設定しおいて、ボタンを押したら決められたメッセージを送信できるようにする

## DB 設計

### users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

#### Association

- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

### groups テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

#### Association

- has_many :groups_users
- has_many :users , through: :groups_users
- has_many :messages

### groups_users テーブル

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

#### Association

- belongs_to :group
- belongs_to :user

### messages テーブル

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| body     | text    |                                |
| image    | string  |                                |
| group_id | integer | null: false, foreign_key: true |
| user_id  | integer | null: false, foreign_key: true |

#### Association

- belongs_to :user
- belongs_to :group
