import requests
import json
import time
import random
from IPython.display import display, Audio, clear_output, Image

lst = []

while True:
    inp = input("Enter a search term (or 'done' to stop):")
    
    if inp == "done":
        print(str(len(lst)) + " songs total")
        break 
    
    response = requests.get("https://itunes.apple.com/search", params = 
                        {
                        "term" : inp,
                        "media" : "music"
                        })
    itunes_data = json.loads(response.text)
        
#     print(itunes_data)
        
    for song in itunes_data["results"]:
        lst.append(song["trackName"])
        
    print(str(len(lst)) + " songs so far")


############################################################
    
rnd = 0

while True:

    rnd += 1
    print("== ROUND " + str(rnd) + " ==")

    randSong = random.choice(lst)

    true = randSong.upper()

    hintList = []
    
    dis2 = ""
    
    for audio in itunes_data["results"]:
#         print(audio)
        if audio["trackName"] == randSong:
            audio_url = audio["previewUrl"]
            image_url = audio["artworkUrl100"]

            # print(audio_url)

    display(Audio(audio_url, autoplay = True))

    import mimetypes
    mimetypes.init()
    mimetypes.add_type('audio/mp4', '.m4a')

    dis = ""

    for char in true:
        if char.isalnum() == True:
            dis += "_"
        elif char.isalnum() == False:
            dis += char

    print(dis + "\n")
    
    while True:
    
        guess = input("\n Guess the song (or 'skip' or 'exit' or 'hint'): ").upper()
    
        if guess == "SKIP" or guess == "PASS":
            print("The song was '" + true + "'")
            time.sleep(3)
            clear_output()
            break
        
        if guess == "HINT":
            guess2 = input("\n Would you like to see the album cover (1) or the first letter of each word (2)?").upper() 
            
            if guess2 == "1":
                display(Image(image_url))
                
            if guess2 == "2":
                hintList = true.split(" ")
                
                for word in hintList:
                    if word[0].isalnum() == False:
                        dis2 += word[0]
                        if len(word) > 1:
                            dis2 += word[1]
                            for x in range(len(word) - 2):
                                if word[x + 2].isalnum() == False:
                                    dis2 += word[x + 2]
                                elif word[x + 2].isalnum() == True:
                                    dis2 += "_"
                            dis2 += " "
                                
                    elif word[0].isalnum() == True:
                        dis2 += word[0]
                        if len(word) > 1:
                            for x in range(len(word) - 1):
                                if word[x + 1].isalnum() == False:
                                    dis2 += word[x + 1]
                                elif word[x + 1] == " ":
                                    dis2 += " "
                                elif word[x + 1].isalnum() == True:
                                    dis2 += "_"
                        dis2 += " "
                            
                print(dis2)
                            
        elif guess == "EXIT":
            print("The song was '" + true + "'")
            break

        elif guess == true:
            print("You got it!")
            time.sleep(3)
            clear_output()
            break

        else:
            print("It's not '" + guess + "'")        
            
    if guess == "EXIT":
        time.sleep(3)
        clear_output()
        break
        