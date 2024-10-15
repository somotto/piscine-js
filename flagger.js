function flags(input) {
    const output = {
      alias: { h: 'help' },
      description: ''
    };
  
    for (const [flag, description] of Object.entries(input)) {
      if (flag === 'help') continue;
  
      const alias = flag[0].toLowerCase();
      output.alias[alias] = flag;
  
      if (input.help === undefined || (Array.isArray(input.help) && input.help.includes(flag))) {
        output.description += `${output.description ? '\n' : ''}-${alias}, --${flag}: ${description}`;
      }
    }
  
    // If 'help' is not in the input, add descriptions for all flags
    if (input.help === undefined) {
      output.description = `-h, --help: Shows the help for all flags\n${output.description}`;
    }
  
    return output;
  }