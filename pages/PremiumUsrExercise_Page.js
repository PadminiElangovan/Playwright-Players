export class PremiumUsrExercise_Page{

    constructor(page){
        this.page = page;
        this.exerciseTab = page.getByRole('button', { name: 'Exercise' });
        this.excSectionTitle = page.getByRole('heading', { name: 'Today\'s Exercise Plan' });
        this.fullSchdBtn = page.getByRole('button', { name: 'View Full Schedule' });
        this.markComplBtn = page.getByRole('button', { name: 'Mark as Completed' });
        this.undoBtn = page.getByRole('button', { name: 'Undo' });
        this.completedTxt = page.getByText('CompletedUndo');

        this.warmUpTab = page.getByRole('button', { name: 'Warm Up' });
        this.mainWrkOutTab = page.getByRole('button', { name: 'Main Workout' });
        this.coolDwnTab = page.getByRole('button', { name: 'Cool Down' });

        this.exerciseName = page.locator('//div[@class="flex justify-between items-center mb-4"]/h3');
        this.exerciseDesc = page.locator('//p[@class="text-gray-600 mb-2"]');
        this.exerciseTime = page.locator('//div[@class="flex space-x-4 text-sm text-gray-500"]/span[1]');
        this.exerciseCalorie = page.locator('//div[@class="flex space-x-4 text-sm text-gray-500"]/span[2]');
        this.exerciseIntensity = page.locator('//div[@class="flex space-x-4 text-sm text-gray-500"]/span[3]');

        //Today's Exercise Schedule Page
        this.exeSchdTitle = page.getByRole('heading', { name: 'Today\'s Exercise Schedule' });
        this.bckHomeBtn = page.getByRole('button', { name: 'Back to Home' });

        this.warmUpSection = page.getByRole('heading', { name: 'Warm Up' });
        this.warmUpExerName = page.locator('//div/h2[text()="Warm Up"]/following::h3[1]');
        this.warmUpExerDesc = page.locator('//div/h2[text()="Warm Up"]/following::p[1]');
        this.warmUpExerTime = page.locator('//h2[text()="Warm Up"]/following-sibling::div//span[1]');
        this.warmUpExerCalo = page.locator('//h2[text()="Warm Up"]/following-sibling::div//span[2]');
        this.warmUpExerIntens = page.locator('//h2[text()="Warm Up"]/following-sibling::div//span[3]');

        this.mainWrkOutSection = page.getByRole('heading', { name: 'Main Workout' });
        this.mainWrkExerName = page.locator('//div/h2[text()="Main Workout"]/following::h3[1]');
        this.mainWrkExerDesc = page.locator('//div/h2[text()="Main Workout"]/following::p[1]');
        this.mainWrkExerTime = page.locator('//h2[text()="Main Workout"]/following-sibling::div//span[1]');
        this.mainWrkExerCalo = page.locator('//h2[text()="Main Workout"]/following-sibling::div//span[2]');
        this.mainWrkIntens = page.locator('//h2[text()="Main Workout"]/following-sibling::div//span[3]');

        this.coolDwnSection = page.getByRole('heading', { name: 'Cool Down' });
        this.coolDwnExerName = page.locator('//div/h2[text()="Main Workout"]/following::h3[1]');
        this.coolDwnExerDesc = page.locator('//div/h2[text()="Main Workout"]/following::p[1]');
        this.coolDwnExerTime = page.locator('//h2[text()="Main Workout"]/following-sibling::div//span[1]');
        this.coolDwnExerCalo = page.locator('//h2[text()="Main Workout"]/following-sibling::div//span[2]');
        this.coolDwnIntens = page.locator('//h2[text()="Main Workout"]/following-sibling::div//span[3]');
    
        this.totalDuration = page.locator('//div[@class="flex justify-between text-violet-800"]/span[1]');
        this.totalCal = page.locator('//div[@class="flex justify-between text-violet-800"]/span[2]');

    }

}