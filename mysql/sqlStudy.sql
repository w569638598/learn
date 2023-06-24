insert into `student` (name, birthday, sex) values('123', '2032-01-02', 0); 
use test;
create database sfas;
drop database new_schema;
drop table `test`;
select * from student where sex=0;
select * from student where sex is null;
select * from student where sex is not null;
select * from student where sex between 1 and 0;
select * from student where `name` like '%as%';
select * from student where `name` like 'as%';
select * from student where `name` like '%as_';-- as后边还有一位
select * from student where `name` like '%as_' and sex = 1 or birthday is not null;-- and并且 or 或者
select * from student where sex in (0, 1);
select distinct * from student where sex in (0, 1) order by sex desc;
select * from student where sex in (0, 1) order by sex asc, `name` desc limit 0,1;-- 俩排序条件 limi分页  distinct去重 distinct后边的所有字段均为不重复才返回，一i版只有一个字段
select * from student,class;-- 笛卡尔积，两张表相乘；
select * from class as c inner join student as s on c.id != s.id;-- class表和student表中的id不相等返回；join后为基准表;inner join内链接 left join 左链接；right join有链接；
select e.name 姓名 from student e;-- 表别名e；
select floor(id, 1) from student;
select location, count(id) as 员工数量 from employee group by location;-- 根据地址分组，再count计算一组里的数量；