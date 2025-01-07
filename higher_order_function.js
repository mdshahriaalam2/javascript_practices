function sayhello(name) {
    console.log("Hello", name);
}

const say = sayhello; // here say will work as a function
say("Md. Shifat"); // it will print "Hello Md. Shifat"