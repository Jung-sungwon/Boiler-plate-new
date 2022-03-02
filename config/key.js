if(process.env.NODE_ENV === 'production'){ //production은 배포되었을때 환경
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}

//process.env.NODE_ENV 은 환경변수로 지금 서버를 어떤 환경에서 돌리는지를 인지함. 로컬인지 아니면 배포 후 환경인지 등등.