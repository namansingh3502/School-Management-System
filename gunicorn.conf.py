bind = "127.0.0.1:8080"                   # Don't use port 80 becaue nginx occupied it already.
errorlog = '/home/naman/Desktop/Django_Projects/logs/gunicorn-error.log'  # Make sure you have the log folder create
accesslog = '/home/naman/Desktop/Django_Projects/logs/gunicorn-access.log'
loglevel = 'debug'
workers = 1     # the number of recommended workers is '2 * number of CPUs + 1' 
