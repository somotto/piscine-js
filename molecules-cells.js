const RNA = (dna) => {
    return dna.replace(/[GCTA]/g, (nucleotide) => {
      switch (nucleotide) {
        case 'G': return 'C';
        case 'C': return 'G';
        case 'T': return 'A';
        case 'A': return 'U';
      }
    });
  };
  
  const DNA = (rna) => {
    return rna.replace(/[GCUA]/g, (nucleotide) => {
      switch (nucleotide) {
        case 'G': return 'C';
        case 'C': return 'G';
        case 'U': return 'A';
        case 'A': return 'T';
      }
    });
  };