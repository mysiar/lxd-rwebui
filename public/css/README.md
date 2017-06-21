
Google fonts locally

1. get css font definition from google accessing font link
2. create css file for it.
3. run
	```
	more Roboto.css | grep url| grep -o -P '(?<=url\().*(?=\) format)' | xargs wget
	```
	to get all fonts from css file 


