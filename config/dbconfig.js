module.exports = {
    user :"system",
    
    password : "2060333",
    
    connectString :  "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = server1)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))",
    
    externalAuth : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
    };