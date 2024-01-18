## 常用命令
```
git init
git add .
git status
git remote -v

git commit -m 'update'
git push origin master //提交
git pull origin master //更新

//获取秘钥，免密登录
ssh-keygen -t rsa -C "test@sina.cn"
cat ~/.ssh/id_rsa.pub

//Git 全局设置:
git config --global user.name "lisan"
git config --global user.email "lisan@sina.cn"

//创建 git 仓库:
mkdir order
cd order
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/lisan/order.git
git push -u origin master

//已有仓库
cd existing_git_repo
git remote add origin https://gitee.com/lisan/order.git
git push -u origin master

//忽略指定文件
git rm .env --cached
git checkout -- .
git checkout .
```

## 撤销操作

```
以下就是 git reset 回退的方式：

git reset --mixed：版本库 -> 暂存区

git reset --soft：暂存区 -> 工作区

git reset --hard: 版本库 -> 暂存区 -> 工作区

--撤销commit文件，还未push--

git log --pretty=oneline  ->简洁显示日志记录
git reset --hard 提交id 

意思就是,你要撤销第六次 commit ,你就要把 HEAD 指向 第五次,所以 reset 一下 HEAD 就好啦
注意:工作空间的代码的改动就没啦
如果想保留工作空间的代码只是撤销commit,请执行下面的命令:
git reset --soft HEAD^
HEAD^的意思是上一个版本，也可以写成HEAD~1
如果你进行了2次commit，想都撤回，可以使用HEAD~2

ps : git status 查看当前文件的状态
至于这几个参数：
--mixed
意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。
--soft
不删除工作空间改动代码，撤销commit，不撤销git add .
--hard
删除工作空间改动代码，撤销commit，撤销git add .
注意完成这个操作后，就恢复到了上一次的commit状态。
```

## 分支
```
//查看有哪些分支
git branch -a
* master
  recharge

===========
//查看当前分支
 git branch

//切换分支
> git checkout 分支名

//强制push
//https://blog.csdn.net/weixin_43290229/article/details/86410263
git push -f origin master

```

