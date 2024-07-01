# tsukuboshi's resume

## 経歴書のデータ形式

- [GitHub Pages](https://tsukuboshi.github.io/resume/)  
- [PDF](https://github.com/tsukuboshi/resume/releases)
- [Markdown](https://github.com/tsukuboshi/resume/blob/main/docs/README.md)  

## 本リポジトリの機能

### 💅 自動校正

以下コマンドで、[textlint](https://github.com/textlint/textlint)による自動校正が行われます。

```bash
npm run format
```

また GitHub Actions により、プッシュ時にも自動校正が行われます。

校正ルールを変更する場合は、 `.textlintrc` を編集してください。

### 📝 PDF生成

以下コマンドで、[md-to-pdf](https://www.npmjs.com/package/md-to-pdf)による PDF 生成が行われます。  

```bash
npm run build:pdf
```

出力 PDF の スタイル設定を実施する場合は、`pdf-configs/style.css` を編集してください。  

### 🛠 リリース作成

vX.X.X タグを付与してプッシュすると、GitHub Actions は以下を実行します。  

- PDF 生成
- GitHub Pages 生成
- GitHub Release 作成
- PDF を Assets に登録

以下コマンドでリリースを作成できます。  

```bash
export VERSION=$(latest_tag=$(git describe --tags --abbrev=0 2>/dev/null) && if [ -z "$latest_tag" ]; then echo "v0.1.0"; else version=${latest_tag#v}; IFS=. read -r major minor patch <<< "$version"; if [ "$patch" -eq 9 ]; then minor=$((minor + 1)); patch=0; elif [ "$minor" -eq 10 ]; then major=$((major + 1)); minor=0; patch=0; else patch=$((patch + 1)); fi; echo "v$major.$minor.$patch"; fi)
git add docs/README.md
git commit -m "add job"
git tag ${VERSION}
git push origin --tags
```

### 参考文献

[GitHubの機能をフルに使って職務経歴書の継続的インテグレーションを実現する](https://zenn.dev/ryo_kawamata/articles/resume-on-github)
