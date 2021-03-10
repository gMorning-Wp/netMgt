# 新建一个分支，与指定的远程分支建立追踪关系 

1. $ git branch --track [branch] origin/[remote-branch] 或者 git checkout -b [branch] origin/[remote-branch]

# 本地新建一个工单分支并推送到远程仓库

1. $ git checkout master
2. $ git pull
3. $ git checkout -b b#2332-test
4. $ git push origin b#2332-test

# 当前开发分支上有未提交的代码，切换到其他分支，然后返回本分支继续开发

1. $ git stash --include-untracked
2. $ git checkout other_branch
3. $ git checkout current_branch
4. $ git stash pop

# Merge Request过程

- 发起人发起Merge Request
    1. 在Gitlab Web站点上进入此工程的Branches目录下
    2. 在需要发起Merge request的分支上点击“Merge request”按扭
    3. 在”New Merge Request“界面填写"Title"、"Assignee"，选择"Target branch"，点击“Submit merge request”按扭
    
- 评审人处理过程
    1. viewer会收到邮件通知
    2. 进入Gitlab Web站点，右上角会看到Todos
    3. 进入To do列表就可以看到需要review的请求了，点击内容进入
    4. 对于需要修改的地方可以标注Comment信息(点击当前行左侧"Add a comment to this line"按扭)
    5. 这时发起人会收到邮件通知，看到comment信息

- 发起人解决Review问题
    1. 发起人修改本工单分支对应的问题，然后推送到此工单分支
    2. 在Comment信息下Reply
    3. viewer可以继续view修改后的内容
    
- 发起人觉得Comment不是问题
    1. 直接在Comment信息下Reply原因

- 评审人 Merge代码
    1. 确认修改的代码没有问题了，然后点击“Merge”，勾选"Remove source branch"就完成了

# 清理无效的远程追踪分支

$ git remote prune origin

# 删除本地无用的分支

$ git branch -d [branch-name]
    

        