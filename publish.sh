#!/bin/sh

yui-compressor runeblade.js >publish_files/runeblade.js
yui-compressor runeblade.css >publish_files/runeblade.css
tidy runeblade.html >publish_files/runeblade.html

aws s3 cp publish_files/runeblade.js s3://rb.shm.me
aws s3 cp publish_files/runeblade.css s3://rb.shm.me
aws s3 cp publish_files/runeblade.html s3://rb.shm.me