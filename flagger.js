function flags(input) {
    const output = {
      alias: { h: 'help' },
      description: ''
    };
  
    if (Object.keys(input).length === 0) {
      return output;
    }
  
    const descriptionFlags = input.help && Array.isArray(input.help) ? input.help : Object.keys(input);
  
    for (const [flag, description] of Object.entries(input)) {
      if (flag === 'help') continue;
  
      const alias = flag[0].toLowerCase();
      output.alias[alias] = flag;
  
      if (input.help === undefined || (Array.isArray(input.help) && input.help.includes(flag))) {
        output.description += `${output.description ? '\n' : ''}-${alias}, --${flag}: ${description}`;
      }
    }
  
    if (input.help === undefined && output.description) {
      output.description = `-h, --help: Shows the help for all flags\n${output.description}`;
    }
  
    return output;
  }