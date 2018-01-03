#!/bin/ksh
# this script takes space delimited paramaters
#   $1 = pageID
#   $2 through $n= searchPattern

pageID=$1
shift
searchPattern=$*

# Log into reality
reality -a csr << EOD
ADP
TCL
FFC.SEARCH.FORMS.LIBRARY.DRIVE $pageID $searchPattern
EOD