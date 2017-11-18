//判断是否为空
function doIsNull(data) {
    data = "" + data;
    return (data == "" || data == undefined || data == null || data == "null" || data == "undefined") ? true : false;
}