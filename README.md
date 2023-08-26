# ✨Project Musiq✨🚀

Introducing my new web app that will revolutionize the way you listen to music. I built this app using the latest technologies including ReactJS, Redux, and Tailwind, to create a sleek and user-friendly interface that is easy to navigate.

My app not only provides a search functionality to find your favorite songs, but it also utilizes the Shazam API to offer an extensive list of related songs by your favorite artists. You can easily access top charts from around the world and discover new music from different regions.

In addition, I've added a unique feature that utilizes geolocation API to identify the music popular in your location. With this feature, you can easily discover new music from your local region and stay up-to-date with the latest trends.

I understand that building such a sophisticated app was no easy feat, but I worked tirelessly to minimize errors and bugs, ensuring that my app runs smoothly and efficiently. With your support, I hope to continue improving and expanding my app to provide the best music listening experience possible.

I welcome contributions and sponsorships from anyone who shares my passion for music and technology. So, come join me and experience the coolest music app ever created!🔥

## Screenshots
This is a preview of the website make sure to give it a ![star (1)](https://user-images.githubusercontent.com/84116117/222882252-e492996e-244f-4b98-b001-77581ebd8f8a.png):
![Screen Shot 2023-03-12 at 02 28 39](https://user-images.githubusercontent.com/84116117/224516947-56fbc434-567e-46aa-87a8-4de51e3fb7c0.png)

Clone the project
```bash
  git clone https://github.com/kooya3/music-player.git
```
This is a preview of the website make sure to give it a ![star (1)](https://user-images.githubusercontent.com/84116117/222882252-e492996e-244f-4b98-b001-77581ebd8f8a.png):

![Screen Shot 2023-03-12 at 02 27 52](https://user-images.githubusercontent.com/84116117/224517083-e6d03034-44ea-4bef-89ec-1043c78a2260.png)


Check out the complete project [here](https://elmusiq.netlify.app/)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue.
Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.


## System Requirements

To get started with development, you need to install few tools

1. git 
   
   `git` version 2.13.1 or higher. Download [git](https://git-scm.com/downloads) if you don't have it already.

   To check your version of git, run:

   ```shell
    git --version
   ```

2. node 
   
   `node` version 16.15.1 or higher. Download [node](https://nodejs.org/en/download/) if you don't have it already.

   To check your version of node, run:

   ```shell
    node --version
   ```

3. npm
  
   `npm` version 5.6.1 or higher. You will have it after you install node.

   To check your version of npm, run:

   ```shell
    npm --version
   ```

## Setup

To set up a development environment, please follow these steps:

1. Clone the repo using ssh

   ```shell
    git clone git@github.com:kooya3/music-player.git
   ```

2. Change directory to the project directory

    ```shell
    cd music-player
    ```

3. Install the dependencies
   
    ```shell
     npm install
    ```

    If you get an error, please check the console for more information.

    If you don't get an error, you are ready to start development.

4. Run the app
   
    ```shell
    npm run dev
    ```

    Project will be running in the browser.

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Issues

You've found a bug in the source code, a mistake in the documentation or maybe you'd like a new feature? You can help us by [submitting an issue on GitHub](https://github.com/orgs/JavaScript-Mastery-PRO/projects/8). Before you create an issue, make sure to search the issue archive -- your issue may have already been addressed!

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.


## Pull Request

There are 2 main work flows when dealing with pull requests:

* Pull Request from a [forked repository](https://help.github.com/articles/fork-a-repo)
* Pull Request from a branch within a repository

Here we are going to focus on 2. Creating a Topical Branch:


1. First, we will need to create a branch from the latest commit on master. Make sure your repository is up to date first using

   ```bash
    git pull origin main
   ```

   *Note:* `git pull` does a `git fetch` followed by a `git merge` to update the local repo with the remote repo. For a more detailed explanation, see [this stackoverflow post](http://stackoverflow.com/questions/292357/whats-the-difference-between-git-pull-and-git-fetch).

2. To create a branch, use `git checkout -b <new-branch-name> [<base-branch-name>]`, where `base-branch-name` is optional and defaults to `main`. 
   
   Use a standard convention for branch names. For example, `<your-name>-dev`. It will be easier to track your pull requests if you use this convention.
   
   I'm going to create a new branch called `jsm-dev` from the `main` branch and push it to github.

   ```bash
    git checkout -b jsm-dev main
    git push origin jsm-dev
   ```

3. To create a pull request, you must have changes committed to your new branch.

4. Go to [Pull Requests](https://github.com/JavaScript-Mastery-PRO/project1_team4_repository/pulls) and click on the `New Pull Request` button.

5. Select the `main` branch as the `base` branch and the `jsm-dev` branch as the `compare` branch.

6. Follow the template and fill in the proper information for the pull request.

7. Click on the `Submit` button.

8. You have successfully created a pull request. Now wait for mentor approval. Once approved, you can merge the pull request.

# [![Netlify Status](https://api.netlify.com/api/v1/badges/9e499308-013c-4d0a-92c6-72175cc62183/deploy-status)](https://app.netlify.com/sites/elmusiq/deploys)
