// Define the MajorCredits and MinorCredits interfaces
interface MajorCredits {
	credits: number;
	_brand: 'MajorCredits'; // Brand property for nominal typing
  }

  interface MinorCredits {
	credits: number;
	_brand: 'MinorCredits'; // Brand property for nominal typing
  }

  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return { credits: subject1.credits + subject2.credits, _brand: 'MajorCredits' };
  }

  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return { credits: subject1.credits + subject2.credits, _brand: 'MinorCredits' };
  }

  // Example usage
  const major1: MajorCredits = { credits: 30, _brand: 'MajorCredits' };
  const major2: MajorCredits = { credits: 20, _brand: 'MajorCredits' };

  const minor1: MinorCredits = { credits: 10, _brand: 'MinorCredits' };
  const minor2: MinorCredits = { credits: 5, _brand: 'MinorCredits' };

  const totalMajorCredits = sumMajorCredits(major1, major2);
  const totalMinorCredits = sumMinorCredits(minor1, minor2);

  console.log('Total Major Credits:', totalMajorCredits); // { credits: 50, _brand: 'MajorCredits' }
  console.log('Total Minor Credits:', totalMinorCredits); // { credits: 15, _brand: 'MinorCredits' }
