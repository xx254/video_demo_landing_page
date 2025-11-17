// Return color based on category
export const getCategoryColor = (category) => {
  const colorMap = {
    'Lifestyle': 'linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)',
    'Dance': 'linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%)',
    'Food': 'linear-gradient(135deg, #FFA751 0%, #FFE259 100%)',
    'Entertainment': 'linear-gradient(135deg, #A8E063 0%, #56AB2F 100%)',
    'Sports': 'linear-gradient(135deg, #FF512F 0%, #DD2476 100%)',
    'Travel': 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
    'Tech': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
    'Beauty': 'linear-gradient(135deg, #FD6585 0%, #0D25B9 100%)',
    'Pets': 'linear-gradient(135deg, #FDBB2D 0%, #22C1C3 100%)',
    'Music': 'linear-gradient(135deg, #E94057 0%, #8A2387 100%)',
  };

  return colorMap[category] || 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)';
};

// Get all available categories
export const getAllCategories = () => {
  return [
    'Lifestyle',
    'Dance',
    'Food',
    'Entertainment',
    'Sports',
    'Travel',
    'Tech',
    'Beauty',
    'Pets',
    'Music',
  ];
};

