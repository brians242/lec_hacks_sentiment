import sys
import requests
if sys.version_info.major == 3 and sys.version_info.minor >= 10:

    from collections.abc import MutableMapping
else:
    from collections import MutableMapping

def main():
    r = requests.post(
    "https://api.deepai.org/api/sentiment-analysis",
    data={
        'text': 'I had a good day!',
    },
    headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
)
    print(r.json())
    

if __name__ == "__main__":
    main()