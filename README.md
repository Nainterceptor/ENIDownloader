ENIDownloader
=============

Download a full PDF from Editions ENI.

What is "Editions ENI" ?
------------------------

Editions ENI is a great company which sell some great books in french about technical subjects.

Why ?
-----

I want to read an ebook on my tablet/e-reader but I can't, because ENI want to "prevent" or "limit" piracy. 
I have an account on ENI. So I have access to books and I can download a PDF. One by one for each chapter. 
I can also read my book online through the website himself.
 
Now, I can download the book thanks to this PoC and read my book where I don't have Internet (like subways) without the
manual download of ~120 files.

About the law...
----------------

In France, the copyright (called "Droit d'auteur") law has an exception called "private copy" ("Copie privée") :
You may create a copy of something if the goal is a private usage. Two origins are public diffusion and bought things.
So, you are not able to use this PoC to publish a book on a hidden network :)

Requirements
------------

You should have casperJS and cpdf. The merge snippet is MacOS specific. Please clean "docs" directory between 
two downloads

Usage
-----

Sorry, this script is a Proof of concept, I provide no interface, and no configuration file at this time.

Steps :
- Login to your eni-training, choose your book, copy the URL
- paste your URL in "url" var in app.js, line 7
- Copy your cookies values __rsaxc ; __hnwky ; ENI_Editions_Portail in lines 29, 30, 31
- Execute ./crawl.sh
- Check pdf in docs directory. If a file is < than 3ko, crawl failed. Check the number in the file name, 
uncomment lines 43/47, change the number, and back to step 1 : URL can change for the same book.
- Execute ./merge.sh to merge all pdf files in a single file. 
- Optionally, you can execute ./fix-footer.sh to remove footer and add a right "Page x of x" :)