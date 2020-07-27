import sys
import subprocess
import os
#from decouple import config

IP_NETWORK = '192.168.1.1'
IP_DEVICE = '192.168.1.37'

proc = subprocess.Popen(['ping', IP_DEVICE], stdout=subprocess.PIPE)

#print(proc)
while True:
    line = proc.stdout.readline()
    if not line:
        break
    # read the IP_NETWORK
    connected_ip = line.decode('utf-8').split()[3]

    print(connected_ip)
    if connected_ip == IP_DEVICE:
        subprocess.Popen(['say', 'Testing connection'])