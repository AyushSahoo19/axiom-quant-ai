import urllib.request
import re

url = 'https://www.youtube.com/watch?v=tY75czj43_4'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    title_match = re.search(r'<title>(.*?)</title>', html)
    if title_match:
        print('Title:', title_match.group(1))
    
    desc_match = re.search(r'"shortDescription":"(.*?)"', html)
    if desc_match:
        print('Desc:', desc_match.group(1)[:1000])
except Exception as e:
    print('Error:', e)
