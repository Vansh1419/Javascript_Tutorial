// function returning function
function myfunc() {
    function hello() {
        return "hello world";
    }
    return hello();
}
console.log(myfunc());