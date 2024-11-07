var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "Package installation for node configuration are covered in this chapter. Please click the next button \u003e on the right side of this page.",
    "description": "Package installation for node configuration are covered in this chapter. Please click the next button \u003e on the right side of this page.",
    "tags": [],
    "title": "Kaia Installation",
    "uri": "/10_kaia_installation/index.html"
  },
  {
    "breadcrumb": "",
    "content": "In this chapter, you will set the Pre-Mainnet network configuration. Please click the next button \u003e on the right side of this page.",
    "description": "In this chapter, you will set the Pre-Mainnet network configuration. Please click the next button \u003e on the right side of this page.",
    "tags": [],
    "title": "Kaia Configuration",
    "uri": "/20_kaia_configuration/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Install telegraf for monitoring. Please click the next button \u003e on the right side of this page.",
    "description": "Install telegraf for monitoring. Please click the next button \u003e on the right side of this page.",
    "tags": [],
    "title": "Monitoring Setup",
    "uri": "/30_monitoring_setup/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Now, we are ready to start Pre-Mainnet service. Please click the next button \u003e on the right side of this page.",
    "description": "Now, we are ready to start Pre-Mainnet service. Please click the next button \u003e on the right side of this page.",
    "tags": [],
    "title": "Start the services",
    "uri": "/40_start_the_services/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Congratulations!! Now, you are playing in the Pre-Mainnet network.",
    "description": "Congratulations!! Now, you are playing in the Pre-Mainnet network.",
    "tags": [],
    "title": "Conclusion",
    "uri": "/50_conclusion/index.html"
  },
  {
    "breadcrumb": "Kaia Installation",
    "content": " 1. CCN Diagram CCN consists of one CN node and two PN nodes. 2. Network architecture Full mesh connection should be made between CNs. So, You need to configure the firewall to allow ingress between nodes. For communication and multichannel between CN, allow TCP 32323-32324 and UDP 32323 to your firewall ingress rule. We will share CN node IPs for Pre-Mainnet configuration separately. You can see the Kaia Design more detailed on the page below.\nhttps://docs.kaia.io/learn/consensus-mechanism/ If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. CCN Diagram CCN consists of one CN node and two PN nodes. 2. Network architecture Full mesh connection should be made between CNs. So, You need to configure the firewall to allow ingress between nodes. For communication and multichannel between CN, allow TCP 32323-32324 and UDP 32323 to your firewall ingress rule. We will share CN node IPs for Pre-Mainnet configuration separately.",
    "tags": [],
    "title": "Network Diagram",
    "uri": "/10_kaia_installation/10_system_diagram/index.html"
  },
  {
    "breadcrumb": "Kaia Configuration",
    "content": " 1. (Only for CN) Firewall configuration 1) For communication and multichannel between kaia CN, allow TCP 32323-32324 with below IP addresses to your firewall ingress rule. 210.109.52.54 210.109.52.222 35.213.154.116 15.235.219.80 147.92.139.235 147.92.139.230 147.92.139.231 147.92.139.232 147.92.139.233 147.92.139.234 35.213.163.233 47.237.2.159 52.79.244.19 Your PN IP 2) Additionally, it is required to allow UDP 32323 with the same IP addresses to your firewall ingress rule. 210.109.52.54 210.109.52.222 35.213.154.116 15.235.219.80 147.92.139.235 147.92.139.230 147.92.139.231 147.92.139.232 147.92.139.233 147.92.139.234 35.213.163.233 47.237.2.159 52.79.244.19 52.199.8.244 Your PN IP 3) For communication, allow all traffic to your firewall egress rule. IP version | Type | Protocol | Port range | Destination -------------------------------------------------------------------------------------- IPv4 | All traffic | All | All | 0.0.0.0/0 2. (Only for PN) Firewall configuration 1) For communication and multichannel between Kaia PN, allow TCP 32323-32324 with below IP addresses to your firewall ingress rule. 0.0.0.0/0 2) Additionally, it is required to allow UDP 32323 with the same IP addresses to your firewall ingress rule. 0.0.0.0/0 3) For communication, allow all traffic to your firewall egress rule. IP version | Type | Protocol | Port range | Destination --------------------------------------------------------------------------------------- IPv4 | All traffic | All | All | 0.0.0.0/0 Please note that the above four IP addresses are attached to the Kaia CNs.\nIf you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. (Only for CN) Firewall configuration 1) For communication and multichannel between kaia CN, allow TCP 32323-32324 with below IP addresses to your firewall ingress rule. 210.109.52.54 210.109.52.222 35.213.154.116 15.235.219.80 147.92.139.235 147.92.139.230 147.92.139.231 147.92.139.232 147.92.139.233 147.92.139.234 35.213.163.233 47.237.2.159 52.79.244.19 Your PN IP 2) Additionally, it is required to allow UDP 32323 with the same IP addresses to your firewall ingress rule. 210.109.52.54 210.109.52.222 35.213.154.116 15.235.219.80 147.92.139.235 147.92.139.230 147.92.139.231 147.92.139.232 147.92.139.233 147.92.139.234 35.213.163.233 47.237.2.159 52.79.244.19 52.199.8.244 Your PN IP 3) For communication, allow all traffic to your firewall egress rule. IP version | Type | Protocol | Port range | Destination -------------------------------------------------------------------------------------- IPv4 | All traffic | All | All | 0.0.0.0/0",
    "tags": [],
    "title": "Firewall Configuration",
    "uri": "/20_kaia_configuration/10_firewall_configuration/index.html"
  },
  {
    "breadcrumb": "Start the services",
    "content": " 1. Start the Kaia service, if it is running 1) For CN $ sudo systemctl status kcnd $ sudo systemctl start kcnd $ sudo systemctl status kcnd 2) For PN $ sudo systemctl status kpnd $ sudo systemctl start kpnd $ sudo systemctl status kpnd If the services are not installed from yum, you can start the service like below $ sudo \u003cinstallation_path\u003e/kcnd status $ sudo \u003cinstallation_path\u003e/kcnd start $ sudo \u003cinstallation_path\u003e/kcnd status 2. Start the Telegraf service, if it is running For both CN and PN $ sudo systemctl status telegraf $ sudo systemctl start telegraf $ sudo systemctl status telegraf If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. Start the Kaia service, if it is running 1) For CN $ sudo systemctl status kcnd $ sudo systemctl start kcnd $ sudo systemctl status kcnd 2) For PN $ sudo systemctl status kpnd $ sudo systemctl start kpnd $ sudo systemctl status kpnd If the services are not installed from yum, you can start the service like below $ sudo \u003cinstallation_path\u003e/kcnd status $ sudo \u003cinstallation_path\u003e/kcnd start $ sudo \u003cinstallation_path\u003e/kcnd status",
    "tags": [],
    "title": "Start the services",
    "uri": "/40_start_the_services/10_start_the_services/index.html"
  },
  {
    "breadcrumb": "Monitoring Setup",
    "content": " 1. Telegraf Installation Telegraf Installation Guide (Amazon Linux 2 users, see below):\nhttps://docs.influxdata.com/telegraf/latest/introduction/installation/ Note To install Telegraph on Amazon Linux 2, you may use InfluxData’s RHEL 7 yum repo as follows:\ncat \u003c\u003cEOF | sudo tee /etc/yum.repos.d/influxdb.repo [influxdb] name = InfluxDB Repository - RHEL 7 baseurl = https://repos.influxdata.com/rhel/7/\\$basearch/stable enabled = 1 gpgcheck = 1 gpgkey = https://repos.influxdata.com/influxdata-archive_compat.key EOF If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. Telegraf Installation Telegraf Installation Guide (Amazon Linux 2 users, see below):\nhttps://docs.influxdata.com/telegraf/latest/introduction/installation/ Note To install Telegraph on Amazon Linux 2, you may use InfluxData’s RHEL 7 yum repo as follows:\ncat \u003c\u003cEOF | sudo tee /etc/yum.repos.d/influxdb.repo [influxdb] name = InfluxDB Repository - RHEL 7 baseurl = https://repos.influxdata.com/rhel/7/\\$basearch/stable enabled = 1 gpgcheck = 1 gpgkey = https://repos.influxdata.com/influxdata-archive_compat.key EOF If you finish this step, please click the next button \u003e on the right side of this page.",
    "tags": [],
    "title": "Telegraf Installation",
    "uri": "/30_monitoring_setup/10_telegraf_installation/index.html"
  },
  {
    "breadcrumb": "Kaia Installation",
    "content": " 1. System Requirement (for cloud) Recommended Specification for AWS\nNode Type Model vCPU Memory (GiB) Storage size (GiB) Storage speed (IOPS) Price (Seoul region, USD/h) CN m6i.8xlarge 32 128 4,000 (Minimum) 4,000 (Minimum) 1.92 PN (with Live Pruning DB) m6i.2xlarge 8 32 3,500 (Minimum) 4,000 (Minimum) 0.472 Recommended Specification for Azure\nNode Type Model vCPU Memory (GiB) Storage size (GiB) Storage speed (IOPS) Price (Seoul Central, USD/h) CN D32s v5 32 128 P50 (4096) 7500 1.625 PN (with Live Pruning DB) D8s v5 8 32 P50 (4096) 7500 0.472 Recommended Specification for GCP\nNode Type Model vCPU Memory (GiB) Storage size (GiB) Storage speed (IOPS) Price (Seoul Central, USD/h) CN n2-standard-32 32 128 4,000 4,000 (Minimum) 1.625 PN (with Live Pruning DB) n2-standard-8 8 32 3,500 (Minimum) 4000 0.508121 If you would like to check the detailed requirements or use an on-premise server, please refer to the link below.\nhttps://docs.kaia.io/nodes/core-cell/system-requirements/\nIf you finish check requirements, please click the next button \u003e on the right side of this page.",
    "description": " 1. System Requirement (for cloud) Recommended Specification for AWS\nNode Type Model vCPU Memory (GiB) Storage size (GiB) Storage speed (IOPS) Price (Seoul region, USD/h) CN m6i.8xlarge 32 128 4,000 (Minimum) 4,000 (Minimum) 1.92 PN (with Live Pruning DB) m6i.2xlarge 8 32 3,500 (Minimum) 4,000 (Minimum) 0.472 Recommended Specification for Azure\nNode Type Model vCPU Memory (GiB) Storage size (GiB) Storage speed (IOPS) Price (Seoul Central, USD/h) CN D32s v5 32 128 P50 (4096) 7500 1.625 PN (with Live Pruning DB) D8s v5 8 32 P50 (4096) 7500 0.472",
    "tags": [],
    "title": "System Requirement",
    "uri": "/10_kaia_installation/20_system_requirement/index.html"
  },
  {
    "breadcrumb": "Kaia Configuration",
    "content": " The CN configuration is to create a data directory and set up several values in the configuration file.\nCreate the data/log directory. Install node key. Configure the CN(PN) with kcnd.conf (kpnd.conf). 1. Data, Log Directory Creation Considering the fact that the size of Kaia blockchain data is always increased. It is recommended to use a big enough storage. You may need to create the directory on your desired path.\n1) CN $ mkdir -p /var/kcnd/data $ mkdir -p /var/kcnd/logs 2) PN $ mkdir -p /var/kpnd/data $ mkdir -p /var/kpnd/logs 2. Install Nodekey Nodekey is your Private key what you generate with Klay Tool.\nIn order to operate a node, a nodekey is required. The KCN(KPN) binary will create a new one for you if you do not have it. If you have one, you need to put your nodekey into the data directory.\n$ vi /var/kcnd/data/nodekey $ cp nodekey /var/kcnd/data Set the PN node in the same way.\n3. Install BLS-Nodekey for CN only BLS-Nodekey is your Private key what you generate with Klay Tool.\nIn order to operate a node, a bls-nodekey is required. The KCN binary will create a new one for you if you do not have it. If you have one, you need to put your bls-nodekey into the data directory.\n$ vi /var/kcnd/data/bls-nodekey $ cp bls-nodekey /var/kcnd/data 4. Update the Configuration File Configuration File Location:\nFor the archive distribution, the config directory location defaults to $INSTALL_PATH/kcn-linux-amd64/conf/. For the package distribution, the config directory defaults to /etc/kcnd/conf/. 1) Add configuration for CN # NETWORK=\"\" NETWORK_ID=6336 DATA_DIR=/var/kcnd/data # path where you created in #1 LOG_DIR=/var/kcnd/logs # path where you created in #1 NO_DISCOVER=0 BOOTNODES=\"\" REWARDBASE=\"\" # ADD YOUR REWARDS ADDRESS GENERATED BY KEYTOOL ADDITIONAL=\"--state.trie-cache-limit 5000 --state.live-pruning\" 2) Add configuration for PN # NETWORK=\"\" NETWORK_ID=6336 DATA_DIR=/var/kpnd/data # path where you created in #1 LOG_DIR=/var/kpnd/logs # path where you created in #1 NO_DISCOVER=1 BOOTNODES=\"\" ADDITIONAL=\"--state.trie-cache-limit 5000 --state.live-pruning\" You can check the more information for installation on the page below.\nCN : https://docs.kaia.io/docs/nodes/core-cell/install/install-consensus-nodes/ PN : https://docs.kaia.io/docs/nodes/core-cell/install/install-proxy-nodes/ If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " The CN configuration is to create a data directory and set up several values in the configuration file.\nCreate the data/log directory. Install node key. Configure the CN(PN) with kcnd.conf (kpnd.conf). 1. Data, Log Directory Creation Considering the fact that the size of Kaia blockchain data is always increased. It is recommended to use a big enough storage. You may need to create the directory on your desired path.\n1) CN $ mkdir -p /var/kcnd/data $ mkdir -p /var/kcnd/logs",
    "tags": [],
    "title": "Kaia Configuration",
    "uri": "/20_kaia_configuration/20_configuration/index.html"
  },
  {
    "breadcrumb": "Start the services",
    "content": " 1. Generate BLS key on CN only - Only for Bughole and Certik Go to Data_Dir where nodekey is\n$ sudo kcn account bls-info klay.ipc Successfully wrote 'bls-publicinfo-0x***********.json' send ‘bls-publicinfo-0x***********.json’ file via slack thread You can check the more details requirements on the page below.\nhttps://klaytn.foundation/bls-kip-113-114/ If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. Generate BLS key on CN only - Only for Bughole and Certik Go to Data_Dir where nodekey is\n$ sudo kcn account bls-info klay.ipc Successfully wrote 'bls-publicinfo-0x***********.json' send ‘bls-publicinfo-0x***********.json’ file via slack thread You can check the more details requirements on the page below.\nhttps://klaytn.foundation/bls-kip-113-114/ If you finish this step, please click the next button \u003e on the right side of this page.",
    "tags": [],
    "title": "generate BLS key",
    "uri": "/40_start_the_services/20_generate_bls_key/index.html"
  },
  {
    "breadcrumb": "Monitoring Setup",
    "content": " 1. Enable monitoring in kcnd/kpnd Check the if below two options enabled.\n/etc/kcnd/conf/kcnd.conf\n... METRICS=1 PROMETHEUS=1 ... If two options enabled, You may check port 61001 is open.\n$ netstat -ntap | grep 61001 tcp 0 0 :::61001 :::* LISTEN 8989/kcn 2. Configure Telegraf service Create new telegraf configuration file as klaytn.conf under below path and add the following the configuration.\n/etc/telegraf/telegraf.d/\nEdit ’nodetype’, ‘instance’, and ‘hostname’ appropriately for each node.\n[global_tags] # Change \"cn\" to \"pn\" for PN installation nodetype = \"cn\" # The CN/PN name (e.g. `klaytn-cn`, `klaytn-pn-01`) instance = \"\u003chostname\u003e\" [agent] # The CN/PN name (e.g. `klaytn-cn`, `klaytn-pn-01`) hostname = \"\u003chostname\u003e\" [outputs.influxdb] urls = [ \"http://13.125.193.171:45560\" ] database = \"klaytn\" [inputs.prometheus] urls = [ \"http://localhost:61001/metrics\" ] Note Please find the Pre-mainnet Dashboard as below URL. The Credentials will be provided separately.\nhttp://13.125.193.171:3000/d/K2aqGNDZz/dashboardcco?orgId=1\u0026refresh=10s You can check the more details requirements on the page below.\nhttps://docs.klaytn.foundation/docs/nodes/core-cell/monitoring-setup/ If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. Enable monitoring in kcnd/kpnd Check the if below two options enabled.\n/etc/kcnd/conf/kcnd.conf\n... METRICS=1 PROMETHEUS=1 ... If two options enabled, You may check port 61001 is open.\n$ netstat -ntap | grep 61001 tcp 0 0 :::61001 :::* LISTEN 8989/kcn 2. Configure Telegraf service Create new telegraf configuration file as klaytn.conf under below path and add the following the configuration.\n/etc/telegraf/telegraf.d/\nEdit ’nodetype’, ‘instance’, and ‘hostname’ appropriately for each node.",
    "tags": [],
    "title": "Telegraf Configuration",
    "uri": "/30_monitoring_setup/20_telegraf_configuration/index.html"
  },
  {
    "breadcrumb": "Kaia Configuration",
    "content": " 0. Please, execute sudo -i before this progress 1. Copy genesis.json under DATA directory Genesis file download : https://github.com/kaia.ios-setup-workshop/blob/main/genesis/pre-cypress-genesis.json\n## For CN $ curl -X GET https://packages.kaia.iopress/genesis.json -o /var/kcnd/data/genesis.json ## For PN $ curl -X GET https://packages.kaia.iopress/genesis.json -o /var/kpnd/data/genesis.json 2. Init Genesis block under DATA directory 1) CN configuration $ kcn --networkid 6337 init --datadir /var/kcnd/data genesis.json 2) PN configuration $ kpn --networkid 6337 init --datadir /var/kpnd/data genesis.json 3. (ONLY PN) Create static-nodes.json and copy it under DATA directory example : /var/kpnd/data/static-nodes.json (* We will give the details.)\n** Generate static-nodes.json ** You have 1 CN and 1 PN, each are cn1, pn1. 1. static-nodes.json in pn [ \"CN_KNI_ADDRESS@CN_INTERNAL_IP:PORT?discport=0\u0026ntype=cn\", \"Other_PN_KNI_ADDRESS@Other_pn_1:PORT?discport=0\u0026ntype=pn\" ] You can check the more information for installation on the page below.\nCN : https://docs.kaia.io/docs/nodes/core-cell/install/install-consensus-nodes/#configuration- PN : https://docs.kaia.io/docs/nodes/core-cell/install/install-proxy-nodes/#configuration- If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 0. Please, execute sudo -i before this progress 1. Copy genesis.json under DATA directory Genesis file download : https://github.com/kaia.ios-setup-workshop/blob/main/genesis/pre-cypress-genesis.json\n## For CN $ curl -X GET https://packages.kaia.iopress/genesis.json -o /var/kcnd/data/genesis.json ## For PN $ curl -X GET https://packages.kaia.iopress/genesis.json -o /var/kpnd/data/genesis.json 2. Init Genesis block under DATA directory 1) CN configuration $ kcn --networkid 6337 init --datadir /var/kcnd/data genesis.json 2) PN configuration $ kpn --networkid 6337 init --datadir /var/kpnd/data genesis.json",
    "tags": [],
    "title": "Init Genesis Block",
    "uri": "/20_kaia_configuration/30_init_genesis_block/index.html"
  },
  {
    "breadcrumb": "Kaia Installation",
    "content": " 1. Linux Archive Distribution The archive file consists of the executable binary and the configuration file structured as follows.\nFor CN node : kcn / kcnd For PN node : kpn / kpnd - bin |- kcn |- kcnd - conf |- kcnd.conf File Name | File Description -------------------------------------------------------- bin/kcn | CN executable file bin/kcnd | CN start/termination script file conf/kcnd.conf | CN configuration file Warning Do NOT alter the file structure or file name. If you change it, the node may not function correctly.\nInstallation The installation is decompress of the downloaded package where you want to install the package.\n$ tar zxf kcn-vX.X.X-linux-amd64.tar.gz or $ tar zxf kcn-baobab-vX.X.X-linux-amd64.tar.gz Note it is recommended that decompress directory kcn-linux-amd64/bin path should be added to the environment variable $PATH to run the kcn and kcnd globally.\nAs an example,\n$ export PATH=$PATH:~/downloaded/path/kcn-linux-amd64/bin The other sections assume that the path is added to the variable.\n2. RPM Distribution (RHEL/CentOS/Fedora) Install from Kaia Yum Repo You can install from the Kaia Yum repo, run:\n1) CN Installation sudo curl -o /etc/yum.repos.d/klaytn.repo https://packages.klaytn.net/config/rhel/7/prod.repo \u0026\u0026 sudo yum install kcnd 2) PN Installation sudo curl -o /etc/yum.repos.d/klaytn.repo https://packages.klaytn.net/config/rhel/7/prod.repo \u0026\u0026 sudo yum install kpnd Install downloaded RPM Alternatively, you can install the downloaded RPM file with the following yum command.\n1) CN Installation $ yum install kcnd-vX.X.X.el7.x86_64.rpm or $ yum install kcnd-baobab-vX.X.X.el7.x86_64.rpm 2) PN Installation $ yum install kpnd-vX.X.X.el7.x86_64.rpm or $ yum install kpnd-baobab-vX.X.X.el7.x86_64.rpm Installed Location The installed files are located as follows. (The PN node is also in the same location.)\nFile Name | Location ------------------------------------------- kcnd.conf | /etc/kcnd/conf/kcnd.conf You can check the more details information on the page below.\nCN : https://docs.kaia.io/docs/nodes/core-cell/install/install-consensus-nodes/ PN : https://docs.kaia.io/docs/nodes/core-cell/install/install-proxy-nodes/ If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. Linux Archive Distribution The archive file consists of the executable binary and the configuration file structured as follows.\nFor CN node : kcn / kcnd For PN node : kpn / kpnd - bin |- kcn |- kcnd - conf |- kcnd.conf File Name | File Description -------------------------------------------------------- bin/kcn | CN executable file bin/kcnd | CN start/termination script file conf/kcnd.conf | CN configuration file Warning Do NOT alter the file structure or file name. If you change it, the node may not function correctly.",
    "tags": [],
    "title": "Package Installation",
    "uri": "/10_kaia_installation/30_kaia_package_installation/index.html"
  },
  {
    "breadcrumb": "Start the services",
    "content": " 1. Watch the service log to confirm if your nodes are correctly joined Note If the node is not a proposer at that block and the consensus is successful, the node have executed(==validates) the block. In other words, a block is inserted.\n1) For CN $ tail \u003cyour_klaytn_home_path\u003e/kcnd/log/kcnd.out INFO Inserted a new block number=14 hash=13cbfc…f007fc txs=0 gas=0 elapsed=793.458µs processTxs=167ns finalize=157.708µs validateState=7.542µs totalWrite=443.417µs trieWrite=256.667µs 2) For PN $ tail \u003cyour_klaytn_home_path\u003e/kpnd/log/kpnd.out INFO Inserted a new block number=14 hash=13cbfc…f007fc txs=0 gas=0 elapsed=793.458µs processTxs=167ns finalize=157.708µs validateState=7.542µs totalWrite=443.417µs trieWrite=256.667µs You can check the more details requirements on the page below.\nhttps://docs.klaytn.foundation/docs/misc/operation/node-log/#info-logs If you finish this step, please click the next button \u003e on the right side of this page.",
    "description": " 1. Watch the service log to confirm if your nodes are correctly joined Note If the node is not a proposer at that block and the consensus is successful, the node have executed(==validates) the block. In other words, a block is inserted.\n1) For CN $ tail \u003cyour_klaytn_home_path\u003e/kcnd/log/kcnd.out INFO Inserted a new block number=14 hash=13cbfc…f007fc txs=0 gas=0 elapsed=793.458µs processTxs=167ns finalize=157.708µs validateState=7.542µs totalWrite=443.417µs trieWrite=256.667µs 2) For PN $ tail \u003cyour_klaytn_home_path\u003e/kpnd/log/kpnd.out INFO Inserted a new block number=14 hash=13cbfc…f007fc txs=0 gas=0 elapsed=793.458µs processTxs=167ns finalize=157.708µs validateState=7.542µs totalWrite=443.417µs trieWrite=256.667µs",
    "tags": [],
    "title": "Check the services",
    "uri": "/40_start_the_services/30_check_the_services/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
