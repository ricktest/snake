class Snake{

    constructor(x,y,width,height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.keyDown = 'ArrowRight';
        this.speed = 20;
        this.el;
        this.historyPos = [];
        this.tempx = 0;
        this.tempy = 0;

    }

    setKeyDown(keyDown){
        this.keyDown = keyDown;
    }

    move(){

        switch(this.keyDown){
            case 'ArrowRight':
                this.x+=this.speed;
                break;
            case 'ArrowLeft':
                this.x-=this.speed;
                break;
            case 'ArrowDown':
                this.y+=this.speed;
                break;
            case 'ArrowUp':
                this.y-=this.speed;
                break;
        }

    }

    checkBody(snakeBody){
        for (let i = 1; i < snakeBody.length; i += 1) {
            if(this.x === snakeBody[i].x && this.y === snakeBody[i].y){
                return true;
            }
        }
        return false;
    }

    checkReHead(snakeList){
        

        if(this.x === snakeList[1].tempx && this.y === snakeList[1].tempy){
            
            switch(this.keyDown){
                case 'ArrowRight':
                    this.x-=this.speed *2
                    this.keyDown = 'ArrowLeft'
                    break;
                case 'ArrowLeft':
                    this.x+=this.speed *2
                    this.keyDown = 'ArrowRight'
                    break;
                case 'ArrowDown':
                    this.y-=this.speed*2;
                    this.keyDown = 'ArrowUp'
                    break;
                case 'ArrowUp':
                    this.y+=this.speed*2;
                    this.keyDown = 'ArrowDown'
                    break;
            }
           
        }
       
    }

    checkEat(worldData){
        const i = this.x / this.width;
        const j = this.y / this.height;
        
        if(worldData[j][i]===1){
            worldData[j][i] = 0;
            return true;
        }
        return false;
    }

    checkMove(){
        if(this.x >= 500){
            this.x -= 20;
            return true;
        }
        if(this.x <0){
            this.x+=20;
            //this.x = 500-this.width;
            return true;
        }
        if(this.y < 0){
            this.y +=20;
            return true;
        }
        if(this.y >=  500){
            this.y -= 20;
            return true;
        }
    }

    checkHistory(snake){
       this.x = snake.x;
       this.y = snake.y;
    }
    checkHistory2(x,y){
        
        this.tempx = this.x;
        this.tempy= this.y;
        this.x = x
        this.y = y

     }
  
    getPosition(){
        // this.historyPos.x = this.x;
        // this.historyPos.y = this.y;
        // this.historyPos.keyDown = this.keyDown;
        this.historyPos.push({x:this.x,y:this.y,keyDown:this.keyDown});
        return {x:this.x,y:this.y,keyDown:this.keyDown};
    }

    createSnake(){
        const snake = document.createElement('div');
        snake.style.boxSizing = 'border-box'
        snake.style.position = 'absolute';
        snake.style.width = this.width + 'px';
        snake.style.height = this.height + 'px';
        snake.style.left = this.x + 'px';
        snake.style.top = this.y + 'px';
        snake.style.background = 'green';
        //snake.style.padding = '1px'
        snake.style.border = "1px solid black"
        this.el = snake;
        return this.el;
    }
    
    render(){
        this.el.style.left = this.x + 'px';
        this.el.style.top = this.y + 'px';
    }
}