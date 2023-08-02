exports.sayHello = (req, res) => {
    const data = { name: 'John' };
    res.status(200).json(data);
  };

exports.sayGoodbye = (req, res) => {
  const data = { name: 'Jane' }; 
  res.status(200).json(data);
};

