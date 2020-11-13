export default function assets(path){
    return(`${process.env.PUBLIC_URL}${path[0] === '/' ? '' : '/'}${path}`);
}