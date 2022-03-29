## 개인 HTML Web project
---

MY Web = https://leeeju.github.io/
---

깃허브를 사용해서 개인웹페이지(git블로그)를 만들수 있다는 정보를 듣고 배운적은 없지만 검색와 git의 소스코드 들을 참조 해서 개인 웹사이트를 만들어 보자

우선 html파일을 만든것을 허브에 작용하기 하기 위하여 다양한 방법이 있지만 크게 2가지 방법으로 적용시키게 된다. 
.nojekyll  _config.yml을 사용하게 되는데 가까운 사이트에 가서 복사해와서 자신의 링크게 맞게 수정해주는 작업이 필요하다 


```_config.yml```의 파일 내용을 보면

```bash
# Site Settings
locale                   : "en-US"
title                    : "my portfolio"      <---- 수정
title_separator          : "-"
subtitle                 : # site tagline that appears below site title in masthead
name                     : "Lee Ju Hyun"       <---- 수정
description              : "my portfolio"      <---- 수정
url                      : "https://leeeju.github.io/"     <---- 수정
baseurl                  : "https://blog.naver.com/02stu"  <---- 수정
repository               : # GitHub username/repo-name e.g. "mmistakes/minimal-mistakes"
teaser                   : # path of fallback teaser image, e.g. "/assets/images/500x300.png"
logo                     : # path of logo image to display in the masthead, e.g. "/assets/images/88x88.png"
masthead_title           : # overrides the website title displayed in the masthead, use " " for no title
# breadcrumbs            : false # true, false (default)
words_per_minute         : 200
```

부분에 자신의 웹에 맞는 정보를 기입해주것을 시작으로 깃 블로그 만들기가 시작된다 

참조 사이트 --> https://github.com/webstoryboy/portfolio
