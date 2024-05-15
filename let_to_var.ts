import  {parse} from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'

//node -r ts-node/register let_to_var.ts
// node -r ts-node/register --inspect-brk let_to_var.ts  启动浏览器 调试

const code = 'let a ="let"; let b = 2'
const ast = parse(code, {
  sourceType: 'module'
})
console.log(ast)  

traverse(ast, {
  enter: item =>{
    if(item.node.type === 'VariableDeclaration' && item.node.kind === 'let'){
      item.node.kind = 'var'
    }
  }
})

const result = generate(ast ,{} , code)
console.log(result.code); // var a = "let"; var b = 2;
