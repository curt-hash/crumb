/**
 * Recipe describes the baking process.
 */
interface Recipe {
  // A recipe has a unique name.
  name: string;
  description?: string;
  // A recipe may have labels. Labels define groups.
  labels?: string[];
  // A recipe has ingredients whose quantities are given as baker's
  // percentages.
  ingredients: BakersPercentage[];
  // A recipe has a total mass of flour. This is the point of reference for
  // calculating concrete quantities from baker's percentages.
  flourGrams: number;
  // A recipe makes some quantity (e.g., 2 loaves).
  yield: number;
  // A recipe is a list of steps that may have sub-steps.
  steps: MultiStep[];
}

/**
 * BakersPercentage describes the percentage of an ingredient.
 */
interface BakersPercentage {
  ingredient: Ingredient;
  percentage: number;
}

/**
 * Step describes an activity that the baker should execute.
 */
interface Step {
  // A step name is not unique.
  name: string;
  description?: string;
  // A step may be instantaneous or have a duration.
  durationSeconds?: number;
  // A step may consume ingredients from the Recipe totals.
  ingredients?: BakersPercentage[];
  targetDoughTempF?: number;
  ovenTempF?: number;
}

/**
 * MultiStep is a step that may have sub-steps.
 */
interface MultiStep extends Step {
  subSteps?: Step[];
}

// TODO auto steps: levain, autolyse, mix, bulk ferment, bench rest, shape, proof, bake
// autolyse consumes all flour and water by default that was not consumed by levain
// mix by default consumes all remaining ingredients

/**
 * FoldStep specifies how often and how many times to fold.
 */
interface FoldStep extends Step {
  foldIntervalSeconds?: number;
  foldCount: number;
}

/**
 * Ingredient is a basic ingredient like flour, water or salt. Ingredients may
 * be grouped together by kind.
 */
interface Ingredient {
  name: string;
  description?: string;
  kind?: IngredientKind;
}

/**
 * IngredientKind enumerates kinds of ingredients that may be grouped together.
 */
enum IngredientKind {
  Flour,
}
