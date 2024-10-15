function flags(input) {
    const output = {
      alias: { h: 'help' },
      description: ''
    };
  
    const descriptionFlags = input.help && Array.isArray(input.help) ? input.help : Object.keys(input);
  
    for (const [flag, description] of Object.entries(input)) {
      if (flag === 'help') continue;
  
      const alias = flag[0].toLowerCase();
      output.alias[alias] = flag;
  
      if (input.help === undefined || (Array.isArray(input.help) && input.help.includes(flag))) {
        output.description += `${output.description ? '\n' : ''}-${alias}, --${flag}: ${description}`;
      }
    }
  
    if (input.help === undefined) {
      output.description = `-h, --help: ${Array.isArray(input.help) ? 'Shows the help for the specified flags' : 'Shows the help for all flags'}\n${output.description}`;
    }
  
    return output;
  }