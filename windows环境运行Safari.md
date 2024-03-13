
How to test for Safari on Windows
July 9, 2022
"Safari on Windows?", you say. "That's impossible! Safari doesn't run on Windows." And you're right! I mean it used to, but Apple stopped supporting Windows way back in 2012. Which is a bummer for web developers who want to test Safari compatibility.

But... the browser engine Safari uses, WebKit, still supports Windows, probably because iTunes still supports Windows. And Apple even produces Windows builds of WebKit themselves that you can download and use!

There are some other blog posts with instructions for how to do this, but they are a little outdated. Here are the complete steps as of 2022.


- Download the latest release of WebKitRequirementsWin64.zip
- Visit Apple's WebKit Buildbot pages. The build you want is WinCairo-64-bit-Release-Build.
- Click one of the green numbers.
![](https://james.darpinian.com/blog/assets/images/buildbot-1-9a279e66d481c9954bb5d0d9d0d87943.webp)
4.Expand the transfer-to-s3 section.
![](https://james.darpinian.com/blog/assets/images/buildbot-2-d61b5cdad19b1a7102b690801f4452a5.webp)
5.Copy and download the S3 URL.
![](https://james.darpinian.com/blog/assets/images/buildbot-3-1bdf1b4bc3d70100dd1616b738f9c5d4.webp)
6.After extracting that zip file you will find MiniBrowser.exe inside. But it won't run yet!
7.Go back to the WebKitRequirementsWin64.zip file you downloaded in step 1, take all the files from the bin64 directory and copy them into the same directory as MiniBrowser.exe.
8.Now you can run MiniBrowser.exe and you're done!
![](https://james.darpinian.com/blog/assets/images/minibrowser-df224250658f7a0dbc7e188e4bf32633.webp)

You can now test how things might work in Safari from your Windows computer! You can use the Web Inspector from the Develop menu just as in Safari. Unfortunately there's no way to activate the Responsive Design mode, so you won't be able to test for iOS.

There are some differences in feature support between MiniBrowser and Safari, so it's not 100% perfect. But basic things will work the same, so you can test if your CSS layout is working properly or if your mouse event handling code is working correctly, for instance.

