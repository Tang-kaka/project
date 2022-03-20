function preDo(objs) {    
    for (let key in objs) {
        if ($("#" + key).val() == "") {
            alert(objs[key] + "不能为空");
            return false;
        }
    }

    //2、 把所有的英文 单引号，英文的逗号，圆括号，处理了
    let $input = $(":input");
    
    $input.each(function(){
        this.value = this.value.replace(/\'/g,"‘");
        this.value = this.value.replace(/\"/g,"”");
        this.value = this.value.replace(/\(/g,"（");
        this.value = this.value.replace(/\)/g,"）");
        this.value = this.value.replace(/,/g,"，");
    });

    return true;
}