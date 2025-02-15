
# 下载工具

```text
下载wget
yum install wget
yum -y install wget        安装下载工具wget

wget使用方法  wget下载地址，如果wget <https://nodejs.org/dist/v12.13.0/node-v12.13.0-x64.msi>

```

# 解压文件

```text
xz -d 文件名
tar -xf 文件名

cd ~        当前用户的根目录

ln -s 下载解压后的文件夹路径/bin/node /usr/bin
npm重复

如果出现failed to create symbolic link file exists
使用ln -sf命令

curl 文件传输什么的
curl www.baidu.com可获取返回体，图片的画，直接下载图片
curl -i www.baidu.com   带返回头
```

# 开启网络

| 命令 | 参数 |
| --- | --- |
  cd | /etc/sysconfig/network-scripts|
 vi | ifcfg-enp0s3 |
noboot值改为yes

# 跟目录文件解释

| 命令 | 参数 |
| --- | --- |
/usr            | 软件主要执行的程序
/var            | 系统运行相关
/bin            | 可执行文件
/boot           | 开机需要的文件
/dev            | 所有跟linux链接的设备文件，链接一个设备就会有一个文件
/etc            | 存放配置文件（程序的配置文件，比如账号密码，设置网络等（/etc/sysconfig/network-scripts/））
/hoem           | 每个用户在home文件夹下
/~              | 当前用户的主文件夹
/lib            | linux下的所有函数库
/media          | 存放可以删除的设备（u盘什么的）
/mnt            | media类似
/opt            | 存放第三方软件目录的
/sbin           | 只允许系统管理员可执行的文件
/srv            | 存放用户主动生产出来的数据
/tmp            | 临时文件
/proc           | 虚拟文件系统（存放内存里，开关机就没了，不占磁盘空间）
/sys            | 虚拟的文件系统，和系统相关，和内存相关的
/lost+found     | 文件系统发生错误的时候，存放错误文件碎片的

# 文件夹命令

| 命令 | 参数 |
| - | -|
ls -al      | 可显示隐藏文件
mkdir       | 创建文件 里面为空的
vi          | 创建并进入文件（vi  a.txt）
mkdir -m    | 创建带权限的文件
mkdir -p    | 连续创建
rmdir       | 删除里面为空的
rm -rf      | 删除里面所有
pwd         | 当前目录在绝对目录想是什么
vi          | 进入文件
cat         | 查看文件

# 文件类的命令

| 命令 | 参数 |
| --- | --- |
q!                          | 强制退出，不保存
ctrl+f                      | 向下翻页
ctrl+b                      | 向上翻页
ctrl+d                      | 向下移动半页
ctrl+u                      | 向上移动半页
ctrl+v                      | 开启连选
ctrl+g                      | 光标位置信息
alt+d                       | 删除当前行和下一行
alt+x                       | 删除光标所在位置内容
shift +                     | 下箭头  选择到下一行
shift + d                   | 删除当前行内容（不删除行）
shift + v                   | 选中当前行
shift + q                   | 快速推出编辑状态
shift + a                   | 光标跳转到行尾
shift + g                   | 光标跳转到页尾
shift + h                   | 光标跳转到页首
+                           | 光标移动到非空格行
-                           | 往上移
shift+G                     | 末尾
win + e                     | 行尾
gg                          | 首行
dd                          | 删除
/asd                        | 向下查找
？asd                       | 向上查找
tail  a.text                | 最后十行
tail -f a.text              | 及时最后十行
tail -20f a.test            | 最后20行
cat a.text |grep 'asdf'     | 带有asdf的行
|grep 'asd'                 | 文件里带asd的行，可叠加
|grep                       | 筛选，文件名亦可
chmod 777                   | 文件名  给文件加权限
mkdir -m 777 test           | 文件赋权限
ls -ld                      | 查看文件夹信息（权限、时间、大小）
chown :dev /path            给dev用户组加/path路径的权限
cp [options] source_file destination_file | 源文件路径 目标路径 -r拷贝目录及其下所有文件

---


```text

权限
R   W   X
4   2   1
读  写  执行
文件权限信息说明
第一个字符：路径还是文件（D表示路径，-表示文件）
分三组，每组三个字符
第一组：当前所属用户的权限
第二组：当前所属组的权限
第三组：其他用户的权限

要将路径/home/wl/Documents/promise-folder-test的读写执行权限赋予dev用户组，您可以使用以下命令来实现：

bash
sudo chgrp dev /home/wl/Documents/promise-folder-test  # 更改所属组为dev  
sudo chmod g+rwx /home/wl/Documents/promise-folder-test  # 给所属组添加读、写、执行权限
第一条命令sudo chgrp dev /home/wl/Documents/promise-folder-test用于将文件或目录的所属组更改为dev。

第二条命令sudo chmod g+rwx /home/wl/Documents/promise-folder-test用于给所属组（现在已经是dev组）添加读（read）、写（write）和执行（execute）权限。

这样，dev用户组就能够读取、写入和执行/home/wl/Documents/promise-folder-test路径下的文件了。

```

# 用户操作

|命令|参数|
|-|-|
useradd                     | 创建用户
cat /etc/group              | 查看用户
cat /etc/passwd             | 查看用户
groups                      | 当前用户
whoami                      | 当前是谁
useradd G 用户组 用户名      | 把用户添加到用户组里
groupdel panda              | 删除用户组
userdel panda               | 删除用户
exit                        | 用户退出
groupadd                    | 创建用户组
usermod -g adimals dog      | 修改用户组
id panda                    | 用户信息
su panda                    | 切换用户
passwd   panda              | 设置用户密码（panda是举例用户名）
ssh panda@192.168.1.1       | 用户登陆电脑（panda是举例用户名）

# 系统信息

| 命令|参数|
| -| -|
df                          | 磁盘空间
df -h                       | 磁盘空间
df -i                       | 磁盘索引空间
lscpu                       | 查看cpu信息
ps aux                      | 查看进程
top                         | 资源占用情况

# 系统设置

|命令|参数|
|-|-|
systemctl disable firewalld   | 关闭防火墙
firewall-cmd --state          | 查看防火墙状态
service  iptables status      | 有没有iptables防火墙
firewall-cmd --reload         | 重新加载防火墙规则
ip addr                       | 查看ip
---
# xshell

```ssh  panda@192.168.0.120    panda是用户名```
