# 職務経歴書

## 基本情報

### プロフィール

|key|value|
|---|---|
|ハンドルネーム|つくぼし|
|最終学歴|早稲田大学 商学部卒|
|職種|ソリューションアーキテクト|

### アカウント

- [DevelopersIO](https://dev.classmethod.jp/author/tsukuboshi)
- [Github](https://github.com/tsukuboshi)
- [Zenn](https://zenn.dev/tsukuboshi)
- [SpeakerDeck](https://speakerdeck.com/tsukuboshi)
- [Twitter](https://twitter.com/tsukuboshi0755)

---

## 業務スキル

### クラウドアーキテクチャ設計/構築

現在は AWS を業務で一番用いています。  
モノリシック、静的ウェブサイトホスティング、マイクロサービス、CICD パイプライン、マルチアカウント、RAG システムといった様々なアーキテクチャの設計・構築経験があります。  
特に最近は、生成 AI および RAG システムの設計・構築に特化し、様々な情報を発信しています。

### IaC コード開発

AWS アーキテクチャを構築するにあたり、CloudFormation / Terraform / CDK コードの開発経験が多数あります。  
また Terraform 及び CDK は、自身がよく使用するテンプレート用リポジトリを独自で作成しています。

### アプリケーション開発

インフラのみならず、Lambda (Node.js・Python) を用いたアプリケーション開発経験も持ち合わせています。  
特に Python を用いた Lambda コード開発を多数経験しています。

### チームマネジメント/顧客折衝

小規模チームで（3 - 5 人程度）でリーダーを務めた経験があります。  
またフロントとして顧客と自社の調整をつけ、コミュニケーション推進を行った経験が豊富です。

---

## 技術スキル

実業務で使用した技術のみ列挙。

### AWS

IAM / VPC / ELB(ALB・NLB) / EC2 / EFS / RDS(MySQL・Aurora) / ElastiCache(Redis) / S3 / CloudFront / Route 53 / ACM / WAF / ECS(Fargate) / App Runner / ECR / API Gateway / Lambda(Node.js・Python) / DynamoDB / CodeCommit / CodeBuild / CodeDeploy / CodePipeline / SQS / SNS / Kinesis Data Firehose / EventBridge / CloudWatch (Alarm・Logs) / Control Tower / Organizations / Identity Center / Service Catalog / DevOps Guru / Bedrock / Kendra

### IaC

Terraform / CloudFormation / SAM / CDK

### OS

Linux / Windows

### Programming Language

Python / JavaScript / TypeScript

### SaaS

GitHub / GitHub Actions

## 保有資格

|資格|取得日|
|---|---|
|AWS DOP|2023/6/15|
|AWS SOA|2023/2/15|
|AWS SAP|2022/8/3|
|AWS DVA|2022/3/24|
|AWS SAA|2021/11/11|
|AWS CLF|2021/7/21|
|LPIC-2|2021/6/28|
|ORACLE MASTER Silver Oracle Database 12c|2021/3/29|
|基本情報 技術者試験|2019/11/20|

---

## 経歴：クラスメソッド株式会社（2022/03 - 現在）

クラウドエンジニアとして、主に AWS アーキテクチャの設計/構築を担当。  
PJ に応じて、IaC(CloudFormation/Terraform/CDK)や Serverless(Lambda)を用いたコード開発も実施。

以下では参画したプロジェクトの内、主要なもののみを記載する。

### 生成 AI チャットボットにおける RAG システム設計構築（2）（2024/3 - )

- 概要  
  - 生成 AI を活用したチャットボットアプリで使用する、社内ドキュメントを検索するための RAG システムを構築

- 担当
  - RAG システム設計
  - RAG システム構築
  - RAG システム試験

- 業務内容
  - 設計書作成
  - IaC コード開発
  - 構築作業
  - 動作確認試験

- 使用技術
  - AWS サービス：WAF / App Runner / Bedrock / Kendra / S3
  - IaC： CloudFormation

### 生成 AI チャットボット内製開発（2024/1 - )

- 概要  
  - 生成 AI を活用したチャットボットアプリの開発

- 担当
  - チャットボットアプリ基盤設計
  - チャットボットアプリ基盤開発

- 業務内容
  - 設計書作成
  - IaC コード開発
  - デプロイ手順整備

- 使用技術
  - AWS サービス：WAF / App Runner / DynamoDB / Secrets Manager / Lambda(Node.js) / Bedrock / Kendra / S3
  - IaC： CDK(Typescript)

### 生成 AI チャットボットにおける RAG システム設計構築（1）（2023/11 - 2024/1)

- 概要  
  - 生成 AI を活用したチャットボットアプリで使用する、社内ドキュメントを検索するための RAG システムを構築

- 担当
  - RAG システム設計
  - RAG システム構築
  - RAG システム試験

- 業務内容
  - 設計書作成
  - IaC コード開発
  - 構築作業
  - 動作確認試験

- 使用技術
  - AWS サービス：WAF / App Runner / Bedrock / Kendra / S3
  - IaC： CloudFormation

### SaaSログ連携・保管システム設計構築（2023/5 - 2024/3)

- 概要  
  - SaaS から出力されるログを定期的に AWS にアップロードし、特定用途で使用するためのログ形式に加工するサーバレスアプリケーションを構築。  

- 担当
  - プリセールス
  - 顧客折衝
  - アプリケーション設計
  - アプリケーション構築
  - アプリケーション運用保守
  - CICD システム設計
  - CICD システム構築
  - CICD システム運用保守

- 業務内容
  - 設計書作成
  - アプリケーションコード開発
  - 構築作業
  - 動作確認試験

- 使用技術
  - AWS サービス：EventBridge / Lambda(Python3.9) / SQS / SNS / S3 / CloudWatch (Alarm・Logs) / DevOps Guru
  - IaC： CloudFormation / SAM
  - SaaS： GitHub / GitHub Actions

### 認証システム用コンテナ基盤技術支援（2022/11 - 2023/6)

- 概要  
  - 顧客情報利用のための認証システムにおいて稼働が必要な、アプリケーションのコンテナ化に伴う技術支援を実施。  

- 担当
  - チームマネジメント（5 人）
  - 顧客折衝
  - コンテナ基盤設計
  - コンテナ基盤構築
  - コンテナ基盤試験
  - CICD システム設計
  - CICD システム構築
  - CICD システム試験

- 業務内容
  - 要件定義
  - 設計書作成
  - IaC コード開発
  - 構築作業
  - 動作確認試験
  - 技術質問対応

- 使用技術
  - AWS サービス： VPC / ELB(ALB・NLB) / ECS / EFS / RDS(Aurora) / ElastiCache(Redis) / S3 / CloudFront / WAF / ECS(Fargate) / ECR / API Gateway / CodeCommit / CodeBuild / CodeDeploy / CodePipeline / EventBridge
  - IaC： CloudFormation

### 社内システム用マルチアカウント基盤技術支援

- 期間
  - 2022/7 - 2023/3

- 概要  
  - 部門・プロジェクト単位での権限/環境の分離や、一元的に統一されたガバナンスの確保が必要な、社内システム用のマルチアカウント管理基盤の設計/構築に伴う技術支援を実施。  

- 担当
  - AWS 基盤設計/構築に伴う技術支援

- 業務内容
  - 設計に必要な情報提供
  - 構築に必要な動作検証
  - IaC コード開発
  - 技術質問対応

- 使用技術
  - AWS サービス： Control Tower / Organizations / Identity Center / Service Catalog / WAF / Kinesis Data Firehose / CloudWatch (Logs)
  - IaC： CloudFormation
  - SaaS： GitHub

### Webサイト用RDSインスタンスタイプ自動変更システム構築（2022/7 - 2022/8)

- 概要  
  - Web サイトリニューアルに伴い、RDS インスタンスタイプを定期的に自動変更するためのサーバレスアプリケーションを構築。  

- 担当
  - プリセールス
  - 顧客折衝
  - サーバレスアプリケーション設計
  - サーバレスアプリケーション構築
  - サーバレスアプリケーション試験

- 業務内容
  - 設計書作成
  - アプリケーションコード開発
  - 構築作業
  - 動作確認試験

- 使用技術
  - AWS サービス：EventBridge / Lambda(Python3.9) / SNS

### ECサイト用AWS環境構築（2022/6 - 2022/7)

- 概要  
  - 新規 EC サイトにおけるランディングページに必要な静的ウェブサイトホスティング基盤を構築。  

- 担当
  - チームマネジメント（3 人）
  - 顧客折衝
  - インフラ基盤設計
  - 静的ウェブサイトホスティング基盤構築
  - 静的ウェブサイトホスティング基盤試験

- 業務内容
  - 要件定義
  - 設計書作成
  - IaC コード開発
  - 構築作業
  - 動作確認試験
  - 技術質問対応

- 環境
  - AWS サービス：IAM / CloudFront / S3 / Lambda(Node.js) / Route 53 / ACM
  - IaC： Terraform

### CMSインフラ用AWS環境構築（2022/5 - 2022/8)

- 概要  
  - 動画サイト構築 CMS 新規導入のためのウェブサイト基盤を構築。  

- 担当
  - 顧客折衝
  - ウェブサイト基盤設計
  - ウェブサイト基盤構築

- 業務内容
  - 設計書作成
  - IaC コード開発
  - 構築作業
  - 動作確認試験

- 使用技術
  - AWS サービス：IAM / VPC / ELB(ALB) / EC2 / RDS(MySQL) / ElastiCache(Redis) / S3 / Route 53 / ACM
  - IaC： Terraform

## 兼松エレクトロニクス株式会社（2019/04 - 2022/02)

インフラエンジニアとして、主にオンプレミスにおける Linux サーバの設計/構築を担当。  
またコンテナ技術（Docker/Kubernetes)の検証も実施。

以下では参画したプロジェクトの内、主要なもののみを記載する。

### 基幹システム用vSphere基盤更改（2021/10 - 2022/2)

- 概要  
  - 基幹システムで稼働している OS / ミドルウェア の EOL が切れるため、インフラ基盤の更改を実施

- 担当
  - DB サーバ設計
  - DB サーバ構築

- 業務内容  
  - 設計書作成
  - 構築作業
  - 動作確認試験

- 使用技術
  - ミドルウェア：Oracle19c

### 情報システム用vSphere基盤更改（2021/10 - 2021/12)

- 概要
  - 会社で利用している情報システムの老朽化にともない、新システムのインフラ構築及び既存環境からのデータ移行を実施

- 担当
  - OS / Web サーバ設計
  - OS / Web サーバ構築

- 業務内容
  - 設計書作成
  - 構築作業
  - 動作確認試験

- 使用技術
  - OS：RHEL8
  - ミドルウェア：Apache 2.4

### 基幹システム用z/VM基盤更改（2021/6 - 2021/12)

- 概要
  - 基幹システムで稼働している OS が EOL を迎えるため、システム全体のバージョンアップを実施

- 担当
  - OS 設計
  - OS 構築

- 業務内容
  - 設計書作成
  - 構築作業
  - 動作確認試験

- 使用技術
  - OS：SLES12 SP5

### 基幹システム用VIOS基盤更改 (2021/1 - 2021/7)

- 概要
  - 基幹システムで稼働している OS / ミドルウェア が EOL を迎えるため、インフラ基盤（H/W, S/W)の 更改を実施

- 担当
  - AP サーバ設計
  - AP サーバ構築

- 業務内容
  - 設計書作成
  - 構築作業
  - 動作確認試験

- 使用技術
  - ミドルウェア：WAS9.0.5

### コンテナ社内検証 (2020/6 - 2022/1)

- 概要
  - DX 推進に関連した新ビジネスを確立するべく、コンテナ技術の検証を実施。自身はコンテナ検証/環境構築を担当

- 担当
  - コンテナ基盤 構築

- 業務内容
  - 検証
  - 構築作業

- 使用技術
  - ミドルウェア： Docker / Kubernetes / Openshift

---

## 業務外活動

### 個人開発

以下では開発した自作リポジトリの内、主要なものを記載する。

- [tsukuboshi/dotfiles: Mac用の設定ファイル](https://github.com/tsukuboshi/dotfiles)
  - 自身の PC セットアップ用の dotfiles を格納したリポジトリ
- [tsukuboshi/sam\-notify\-aws\-billing: AWS請求額通知システム用SAMアプリ](https://github.com/tsukuboshi/sam-notify-aws-billing)
  - Email/Slack/LINE に AWS 利用料金を通知するサーバレスシステムコードを格納したリポジトリ
- [tsukuboshi/sam\-bedrock\-kendra\-rag: RAG構成用SAMテンプレート](https://github.com/tsukuboshi/sam-bedrock-kendra-rag)
  - Amazon Kendra と Amazon Bedrock を用いた RAG システムデプロイするためのコードを格納したリポジトリ
- [tsukuboshi/sam\-convert\-diagram\-to\-cfn: AWS構成図をCloudFormationテンプレートに変換するSAMアプリ](https://github.com/tsukuboshi/sam-convert-diagram-to-cfn)
  - Amazon Bedrock を活用し構成図を CloudFormation テンプレートに変換するサーバレスシステムコードを格納したリポジトリ
- [tsukuboshi/gas\-count\-schedule\-time: スケジュール工数集計用GASアプリ](https://github.com/tsukuboshi/gas-count-schedule-time)
  - GAS を活用し Google カレンダーの予定から色ごとに工数をカウントし集計するアプリコードを格納したリポジトリ
- [tsukuboshi/terraform\-microservices\-template: マイクロサービス構成用Terraformテンプレート](https://github.com/tsukuboshi/terraform-microservices-template)
  - AWS を用いたマイクロサービス構成用 Terraform テンプレートを格納したリポジトリ
- [tsukuboshi/cdk\-microservices\-bluegreendeployment\-template: マイクロサービス(ブルーグリーンデプロイメント\)構成用CDKテンプレート](https://github.com/tsukuboshi/cdk-microservices-bluegreendeployment-template)
  - AWS を用いた マイクロサービス構成用 CDK テンプレートを格納したリポジトリ

### ブログ投稿

- [DevelopersIO](https://dev.classmethod.jp/author/tsukuboshi/)
  - 主に技術記事を投稿
  - 2024/5 時点で 80 本以上の記事を作成
- [Zenn](https://zenn.dev/tsukuboshi)
  - 主に自学内容をスクラップで投稿

### イベント登壇

- [JAWS-UG東京 ランチタイムLT会 #11](https://jawsug.connpass.com/event/316451/) (2024/5/15)
  - 資料：[5分で分かる(かもしれない)Vector engine for OpenSearch Serverless](https://speakerdeck.com/tsukuboshi/5fen-defen-karu-kamosirenai-vector-engine-for-opensearch-serverless)
- [JAWS-UG朝会 #55](https://jawsug-asa.connpass.com/event/301827/) (2024/3/15)
  - [君はApplication Composerというサービスを知っているか](https://speakerdeck.com/tsukuboshi/jun-haapplication-composertoiusabisuwozhi-tuteiruka)
- [JAWS-UG CDK支部 #12](https://jawsug-cdk.connpass.com/event/307989/) (2024/2/21)
  - [CDKをCloudFormationテンプレートとして利用する際の注意点n選](https://speakerdeck.com/tsukuboshi/cdkwocloudformationtenpuretotosite-li-yong-suruji-nozhu-yi-dian-nxuan)
- [JAWS-UG朝会 #51](https://jawsug-asa.connpass.com/event/291917/) (2023/11/6)
  - 資料：[インフラエンジニアのためのLambda実践入門](https://speakerdeck.com/tsukuboshi/inhuraensinianotamenolambdashi-jian-ru-men)
- [DevelopersIO 2023 〜GETだけじゃもったいない、PUTしてPOSTする2日間〜](https://event.classmethod.jp/developers-io/2023) (2023/7/17)
  - 資料：[AWSとGitHubを用いたパターン別CI/CD構成解説](https://speakerdeck.com/tsukuboshi/cdgou-cheng-jie-shuo)
- [JAWS-UG朝会 #39](https://jawsug-asa.connpass.com/event/255874/) (2022/11/9)
  - 資料：[(今更ながら)AWSのコンテナサービスについてざっくりまとめてみる](https://speakerdeck.com/tsukuboshi/jin-geng-nakara-awsnokontenasahisunituitesatukurimatometemiru)
- [JAWS-UG CLI専門支部 #273R (入門者向け) AWS CLI基礎(出力)](https://jawsug-cli.connpass.com/event/253108/) (2022/8/29)
  - 資料：[LambdaとLine Messaging APIで湯 婆 婆 botを作ってみた](https://speakerdeck.com/tsukuboshi/lambdatoline-messaging-apidetang-po-po-botwozuo-tutemita)
- [DevelopersIO 2022](https://dev.classmethod.jp/news/devio-2022/) (2022/7/25)
  - 資料：[AWS初心者に捧ぐコスト可視化のススメ](https://speakerdeck.com/tsukuboshi/awschu-xin-zhe-nipeng-gukosutoke-shi-hua-falsesusume)
- [AKIBA.AWS ONLINE #08](https://dev.classmethod.jp/news/akiba-aws-220523/) (2022/5/23)
  - 資料：[それ、t2.micro選んで大丈夫？](https://speakerdeck.com/tsukuboshi/akiba-dot-aws-sore-t2-dot-microxuan-ndeda-zhang-fu)
- [JAWS-UG CLI専門支部 #256M (入門者向け) SQS入門](https://jawsug-cli.connpass.com/event/243629/) (2022/4/29)
  - 資料：[CLI専門支部に参加したらAWSエンジニアに転職できた件について](https://speakerdeck.com/tsukuboshi/clizhuan-men-zhi-bu-nican-jia-sitara-awsenzinianinaretajian-nituite)

---
