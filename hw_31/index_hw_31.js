class Developer {
    constructor(name) {
      this.name = name;
    }
  
    startWork() {
      return `${this.name} start work ...`;
    }
  
    endWork() {
      return `${this.name} end work ...`;
    }
  }
  
  class Frontend extends Developer {
    constructor(name, websiteName) {
      super(name);
      this.websiteName = websiteName;
    }
  
    buildWebsite() {
      return `${this.name} start build website ${this.websiteName}`;
    }
  }
  
  class Backend extends Developer {
    constructor(name) {
      super(name);
    }
  
    buildServer() {
      return `${this.name} start build server`;
    }
  }
  
  
  const john = new Frontend('john', 'Amazon');
  console.log(john.startWork()); 
  console.log(john.buildWebsite()); 
  console.log(john.endWork()); 
  
  const jane = new Backend('jane');
  console.log(jane.startWork()); 
  console.log(jane.buildServer()); 
  console.log(jane.endWork()); 