interface RecipeInstructionsProps {
  instructions: any; // EditorJS data
}

export function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <div className="space-y-6">
      {instructions.blocks.map((block: any, index: number) => {
        switch (block.type) {
          case "paragraph":
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-none">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{block.data.text}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}