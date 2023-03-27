function gitIt{

#    param([string]$msg)
   git status
   git add -A
   git commit -m "$arg[0]"
}


gitIt "default powerShell commit" 