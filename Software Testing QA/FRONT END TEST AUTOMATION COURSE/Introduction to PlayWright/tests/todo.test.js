const { test, expect } = require('@playwright/test')

//Verify if a user can add a task

test('user can add a task', async ({page})=>{
    await page.goto('http://127.0.0.1:5500/')
    await page.fill('#task-input', 'Fix e2e tests')
    await page.click('#add-task')
    const taskText = await page.textContent('.task')
    expect(taskText).toContain('Fix e2e tests')
})


//Verfiy if a user can delete a task

test('user can delete a task', async ({page})=>{
    await page.goto('http://127.0.0.1:5500/')
    await page.fill('#task-input', 'Fix e2e tests')
    await page.click('#add-task')
    
    await page.click('.task .delete-task')

    const tasks = await page.$$eval('.task', tasks => tasks.map(task => task.textContent))
    expect(tasks).not.toContain('Fix e2e tests')
    
})

//Verify if a user can mark a task as complete

test('user can mark a task as complete', async ({page})=>{
    await page.goto('http://127.0.0.1:5500/')
    await page.fill('#task-input', 'Fix e2e tests')
    await page.click('#add-task')
    
    await page.click('.task .task-complete')

    const completedTask = await page.$('.task.completed')

    expect(completedTask).not.toBeNull();  
})

//Verify if a user can filter tasks

test('user can fitler complete task', async ({page})=>{
    await page.goto('http://127.0.0.1:5500/')
    await page.fill('#task-input', 'Fix e2e tests')
    await page.click('#add-task')
    
    await page.click('.task .task-complete')

    await page.selectOption('#filter', 'Completed') 
    const incompleteTaks = await page.$(('.task:not(.completed)'))
    expect(incompleteTaks).toBeNull()
})