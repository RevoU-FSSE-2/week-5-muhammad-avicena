![Header](readme-images/image.png)


<h1 align="left">Fancy to see you here ! <img src="https://raw.githubusercontent.com/muhammad-avicena/profile/master/wave.gif" width="30px" height="30px" /> </h1>

hi, I'm Muhammad Avicena. In today's digital age, having an online presence is essential, and a personal website serves as a platform to showcase your skills, experiences, and portfolio to the world. I have built this responsive modern personal website to highlight my work. I hope you like it !

I am committed to staying up-to-date with industry trends and using the latest tools to develop innovative solutions that surpass expectations.
Interested to have collaboration ? Find me on:

[![Linkedin Badge](https://img.shields.io/badge/-Muhammad_Avicena-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/muhammad-avicena/)
[![Youtube Badge](https://img.shields.io/badge/-Muhammad_Avicena-darkred?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/@MuhammadAvicena)
[![Instagram Badge](https://img.shields.io/badge/-ryuhideaki.dev-purple?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/ryuhideaki.dev/)
[![Gmail Badge](https://img.shields.io/badge/-cenarahmant.dev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:cenarahmant.dev@gmail.com)

## STRUCTURE 📰

- Header
  - Navbar
- Main
  - Hero section
    - Hero article text
  - About section
    - About article text
  - Skills section
    - Grid
  - Contact section
    - Form 
- Footer

## INGREDIENTS I USE 📜
- HTML
- CSS
- JavaScript
- External/Internal Source
  - Icon
  - Image


## HOW TO SET UP 📰
You will need a github account to clone this repository, make sure you're connected to github.

1. Clone this repository
```
git clone https://github.com/RevoU-FSSE-2/week-4-muhammad-avicena.git
```
2. Create a new branch named "develop", in this repository we would like to develop the website with personal information. 
```
git branch -b "develop"
```
3. Once it's created, checkout to a new branch
```
git checkout -b "develop"
```
4. Develop & modify the website with your personal information, once it's done you will need to push it.
```
git add .
git commit -m "update message" // make sure to give details commit message to get better logs
git push origin develop 
```
5. Once you're done, you can merge into main/master branch for production build.
```
git checkout main
git pull origin main // pull the latest version before commit merge
git merge develop // if there are any conflicts, you should resolve them manually
git commit -m "Merge develop into main"
git push origin main
```

## DEPLOYMENT  ⚙️

The project has been successfully deployed using Netlify. You can access the production version of the website by following this link: [https://avicena.site](https://avicena.site) or [this link](https://www.avicena.site).
### Deployment status : 
[![Netlify Status Production](https://api.netlify.com/api/v1/badges/25b51f31-5c41-44f4-84b3-4b1870f47e44/deploy-status)](https://app.netlify.com/sites/avicena-week2/deploys)

1. Connect your account to Netlify !

The first step to deploy in Netlify is creating a new account or use existing account. As a beginner progammer, I would prefer using GitHub account instead.

After you successfully login, you will be redirected to dashboard of Netlify app. In this scenario, you will need to import your existing project from github to netlify. Add new site -> Import existing project -> Connect via GitHub 

![Alt text](img/2.png)

2. Auto Deploy with Netlify !

One of the benefit using your GitHub account connected to Netlify is that you don't have to worry about re-deploying your project manually, once there are changes that have been pushed in your repository, it will automatically re-deployed by Netlify within second.

![Alt text](img/3.png)

3. Domain Registrar with NiagaHoster & Cloudfire !

Go to [https://niagahoster.co.id](https://niagahoster.co.id) and log in or create a new account. Check available domain that you wanted and make it yours.

After that, go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/) and log in or create a new account. You will be redirected to dashboard, add the domain that you have bought previously.

![Alt text](img/4.png)

4. Modify your project with favorite customize domain !

You're on the final step to bringing live your project with custom domain. Go to dashboard Cloudfire -> DNS Records -> CloudFire NameServer. You will see the information of Nameserver that is given to you.

```
Type  Value
NS    andronicus.ns.cloudflare.com
NS    paislee.ns.cloudflare.com
```
Copy these nameserver and jump into dashboard overview of NiagaHoster. You should replace it with NameServer of CloudFire.

After that, go to Netlify Dashboard -> open your project -> Custom domain -> Add domain that you have set previously. In thise case, you will see they're awaiting for external DNS. You will get some information such as IPv4 and domain name that you should input it to CloudFire.

For primary domain :
```
Type  Value   Content Name
A     @       75.2.60.5
```
For subdomain :
```
Type  Value   Content Name
CNAME www     avicena-week4.netlify.com
```

Final step, go to Dashboard Cloudfire -> DNS Records -> Add record domain -> set them accordingly.

![Alt text](img/5.png)

5. Congratulations, You're done !

You should wait within 1x24 hours to let the NiagaHoster and Cloudfire setting up the DNS, it could be faster or slower depending on the provider internet that you're using.

Feel free to explore the website and try out the different features. I appreciate any feedback and suggestions to further improve the user experience.

Happy browsing!
