# tsukuboshi's resume

## Data

- [GitHub Pages](https://tsukuboshi.github.io/resume/)  
- [PDF](https://github.com/tsukuboshi/resume/releases)
- [File](https://github.com/tsukuboshi/resume/blob/main/docs/README.md)  

## Features

### 💅 Lint text

Automatic proofreading with [textlint](https://github.com/textlint/textlint).

```bash
npm run lint
```

It is also automatically executed when pre-commit by [husky](https://github.com/typicode/husky).  
proofreading rules are set with `.textlintrc`.

### 📝 Convert MD to PDF

You can generate PDF with [md-to-pdf](https://www.npmjs.com/package/md-to-pdf).

```bash
npm run build:pdf
```

The output PDF can be styled as you like with CSS. Edit the `pdf-configs/style.css`.  

### 🛠 Create release

When you push with a v** tag, GitHub Actions will additionally run the build, generate the PDF and GitHub Pages, create a Release, and register the PDF to Assets.

```bash
export VERSION=$(latest_tag=$(git describe --tags --abbrev=0 2>/dev/null) && if [ -z "$latest_tag" ]; then echo "v0.1.0"; else version=${latest_tag#v}; IFS=. read -r major minor patch <<< "$version"; echo "v$major.$minor.$((patch+1))"; fi)
git add docs/README.md
git commit -m "add job"
git tag ${VERSION}
git push origin main --tags
```

### References

[GitHubの機能をフルに使って職務経歴書の継続的インテグレーションを実現する](https://zenn.dev/ryo_kawamata/articles/resume-on-github)
