function gitIt{

#    param([string]$msg)
   git status
   git add -A
   git commit -m "$arg[0]"
   git push
}


gitIt "default powerShell commit" 