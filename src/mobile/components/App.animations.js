import anime from 'animejs';

function AnimationController(){
    this.refs = {};

    this.enter = function(){
        return anime({targets: this.refs.appContent, duration: 2000, background: "#F00"})
    }
}

AnimationController.prototype.setRefs = function(refs){
    Object.keys(refs).map( key => {
        this.refs[key] = (refs[key].current)
    })
}

AnimationController.prototype.play = function(name, reverse = false){

    if(reverse){
        const animation = this[name]();
        animation.reverse();
        return animation.play();
    }
    return this[name]();
}

export default new AnimationController();